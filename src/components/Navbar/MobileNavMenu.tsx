import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MenuOptionsType } from './Types';
import { getMenuOption } from './Utils';
import MobileNavMenuSkeleton from '@/components/Skeleton/MobileNavMenuSkeleton';
import { productCategorySelector, shopByBikeSelector, zProBikeSelector } from '@/Redux/Product/Selectors';
import { TAppStore } from '@/Configurations/AppStore';
import { isServiceLoading } from '@/Redux/ServiceTracker/Selectors';
import { categoryProductServiceName, shopByBikeServiceName, zProBikeServiceName } from '@/Redux/Product/Actions';
import { MenuItemsName } from './Constant';
import { replaceSpecialCharactersWithHyphen } from '@/Utils/StringUtils';
import { ROUTES } from '@/Constants/Routes';
import { BikeCategoryEnum } from '@/Constants/AppConstant';

type MobileNavMenuPropsType = {
	onClose: () => void;
};

// Single source of truth for header height, so the fixed header and the
// scrollable content below it can never drift out of sync.
const HEADER_HEIGHT = 64;

function MobileNavMenu({ onClose }: MobileNavMenuPropsType) {

	const shopByBike = useSelector(shopByBikeSelector)
	const shopByProduct = useSelector(zProBikeSelector)
	const productCategory = useSelector(productCategorySelector)

	const isLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [shopByBikeServiceName, zProBikeServiceName, categoryProductServiceName]))

	const [menuOptions, setMenuOptions] = useState<MenuOptionsType[]>([])

	const historyStackRef = useRef<MenuOptionsType[]>([])
	const routeRef = useRef<string>('')

	const navigate = useNavigate()

	const isBikeBrandLevel = (item: MenuOptionsType) => {
		const route = routeRef.current
		const hasBikeModels = Boolean(item.models?.length)

		return (
			hasBikeModels &&
			(route === `/bike-accessories/${BikeCategoryEnum.ZANA}/bike/` ||
				route === `/bike-accessories/${BikeCategoryEnum.ZPRO}/bike/`)
		)
	}

	const getBikeTypeFromRoute = () => {
		return routeRef.current.includes(`/${BikeCategoryEnum.ZPRO}/`)
			? BikeCategoryEnum.ZPRO
			: BikeCategoryEnum.ZANA
	}

	function handleBikeBrandClick(item: MenuOptionsType) {
		const bikeType = getBikeTypeFromRoute()

		navigate(`/${bikeType}/bikes/${replaceSpecialCharactersWithHyphen(item.name)}`)
		onClose()
	}

	function handleMenuItemClick(item: MenuOptionsType) {
		const { name, _id, models = [], route } = item

		if (name === MenuItemsName.MOTODEVIL) {
			window.open(route, '_blank')
			onClose()
			return
		}

		if (route && models.length === 0) {
			const nextRoute =
				route === ROUTES.PRODUCT_CATALOG
					? `${ROUTES.PRODUCT_CATALOG}/${replaceSpecialCharactersWithHyphen(name)}`
					: route
			navigate(nextRoute, { state: { category: name.toLowerCase() } })
			onClose()
			return
		}

		historyStackRef.current.push(item)

		if (route) routeRef.current = route + '/'
		else routeRef.current += replaceSpecialCharactersWithHyphen(name) + '/'

		if (models.length === 0) {
			routeRef.current += _id + '/'
			navigate(routeRef.current)
			onClose()
			return
		}

		setMenuOptions(models)
	}

	function handleBack() {
		historyStackRef.current.pop()
		const lastObject = historyStackRef.current.at(-1)
		const { name = '', models = [] } = lastObject || {}

		if (models.length) setMenuOptions(models)
		else setMenuOptions(getMenuOption())
	}

	useEffect(() => {
		const menuOptions = getMenuOption()
		setMenuOptions(menuOptions)
	}, [shopByBike.length, shopByProduct.length, productCategory.length])

	const isDataPending = !menuOptions || menuOptions.length === 0 || isLoading

	return (
		<Drawer
			open={true}
			onClose={onClose}
			anchor="left"
			transitionDuration={350}
			PaperProps={{
				sx: {
					width: { xs: "100%" },
					bgcolor: "#0d0d0d",
					animation: "slideIn 0.35s ease",
					overflow: "hidden",
					position: "relative",
				},
			}}
			ModalProps={{
				keepMounted: true,
			}}
		>
			{/* Fixed header */}
			<Box
				sx={{
					bgcolor: "#0d0d0d",
					width: "100%",
					height: `${HEADER_HEIGHT}px`,
					position: "fixed",
					top: 0,
					zIndex: 10,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					px: 3,
					borderBottom: "1px solid rgba(255,255,255,0.08)",
				}}
			>
				<Typography
					sx={{
						color: "white",
						fontSize: "0.8rem",
						fontWeight: 700,
						letterSpacing: "0.25em",
						fontFamily: "'Inter', sans-serif",
					}}
				>
					MENU
				</Typography>

				<IconButton
					onClick={onClose}
					aria-label="Close navigation menu"
					sx={{
						color: "rgba(255,255,255,0.7)",
						transition: "background-color 0.2s, color 0.2s",
						"&:hover": {
							backgroundColor: "rgba(255,255,255,0.08)",
							color: "white",
						},
					}}
				>
					<CloseIcon sx={{ fontSize: 22 }} />
				</IconButton>
			</Box>

			{/* Scrollable content, offset below the fixed header */}
			<Box
				sx={{
					pt: `${HEADER_HEIGHT}px`,
					height: "100%",
					overflowY: "auto",
				}}
			>
				{isDataPending && <MobileNavMenuSkeleton />}

				{!isDataPending && historyStackRef.current.length > 0 && (
					<Box
						sx={{
							backgroundColor: "rgba(255,255,255,0.03)",
							display: "flex",
							alignItems: "center",
							padding: "14px 20px",
							borderBottom: "1px solid rgba(255,255,255,0.08)",
						}}
					>
						<IconButton
							size="small"
							sx={{
								color: "rgba(255,255,255,0.6)",
								marginRight: 1.5,
								transition: "background-color 0.2s, color 0.2s",
								"&:hover": {
									backgroundColor: "rgba(255,255,255,0.08)",
									color: "white",
								},
							}}
							onClick={handleBack}
							aria-label="Go back in navigation menu"
						>
							<ArrowBackIosNewIcon fontSize="small" />
						</IconButton>

						<Typography
							component="p"
							sx={{
								fontWeight: 600,
								color: "white",
								fontSize: "0.95rem",
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								fontFamily: "'Inter', sans-serif",
							}}
						>
							{historyStackRef.current.at(-1).name}
						</Typography>
					</Box>
				)}

				{!isDataPending && (
					<Box sx={{ display: "flex", flexDirection: "column", px: 3 }}>
						{menuOptions.map((item, ind) => {
							const { name } = item
							const shouldLinkBikeBrand = isBikeBrandLevel(item)
							const isLast = ind === menuOptions.length - 1

							return (
								<Box
									key={ind}
									sx={{
										display: 'flex',
										flexDirection: 'row',
										alignItems: 'center',
										justifyContent: 'space-between',
										width: "100%",
										cursor: "pointer",
										py: 2.25,
										borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.08)",
										transition: "opacity 0.2s",
										"&:active": { opacity: 0.6 },
										"&:hover .nav-menu-arrow": { color: "#ff3f6c", transform: "translateX(2px)" },
										"&:hover .nav-menu-label": { color: "#ff3f6c" },
									}}
									onClick={() => shouldLinkBikeBrand ? undefined : handleMenuItemClick(item)}
								>
									<Typography
										className="nav-menu-label"
										sx={{
											fontSize: "1.05rem",
											lineHeight: 1.2,
											fontWeight: 600,
											letterSpacing: "0.02em",
											color: 'white',
											fontFamily: "'Inter', sans-serif",
											transition: "color 0.2s",
										}}
										onClick={(event) => {
											if (!shouldLinkBikeBrand) return

											event.stopPropagation()
											handleBikeBrandClick(item)
										}}
									>
										{name}
									</Typography>
									<ArrowForwardIosIcon
										className="nav-menu-arrow"
										sx={{
											color: "rgba(255,255,255,0.35)",
											fontSize: 16,
											transition: "color 0.2s, transform 0.2s",
										}}
										onClick={(event) => {
											if (!shouldLinkBikeBrand) return

											event.stopPropagation()
											handleMenuItemClick(item)
										}}
									/>
								</Box>
							)
						})}
					</Box>
				)}
			</Box>
		</Drawer>
	)
}

export default MobileNavMenu
