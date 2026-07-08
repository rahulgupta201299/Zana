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
					bgcolor: "#2f2f2f",
					animation: "slideIn 0.35s ease",
					overflow: "scroll",
					position: "relative",
					padding: "2rem",
				},
			}}
			ModalProps={{
				keepMounted: true,
			}}
		>
			<Box
				sx={{
					bgcolor: "#2f2f2f",
					width: "100%",
					position: "fixed",
					top: 0,
					zIndex: 10,

				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: 'flex-end',
						marginTop: '1rem',
						marginRight: "3rem",
						cursor: "pointer"
					}}
				>
					<IconButton onClick={onClose} aria-label="Close navigation menu">
						<CloseIcon sx={{ color: "white", fontSize: 30 }} />
					</IconButton>
				</Box>
			</Box>
			{isDataPending && <MobileNavMenuSkeleton />}
			{
				historyStackRef.current.length > 0 && (
					<Box
						sx={{
							backgroundColor: "#3b3b3b",
							display: "flex",
							alignItems: "center",
							padding: "16px 20px",
							marginTop: '3rem',
							borderBottom: "1px solid rgba(255,255,255,0.1)",
						}}
					>
						<IconButton
							size="small"
							sx={{ color: "#bdbdbd", marginRight: 1 }}
							onClick={handleBack}
							aria-label="Go back in navigation menu"
						>
							<ArrowBackIosNewIcon fontSize="small" />
						</IconButton>

						<Typography
							component="p"
							variant="h6"
							sx={{
								fontWeight: 700,
								color: "#bdbdbd",
								fontSize: "1.25rem",
							}}
						>
							{historyStackRef.current.at(-1).name}
						</Typography>
					</Box>
				)
			}
			<Box
				sx={{
					marginTop: "3rem",
					display: "flex",
					flexDirection: "column",
				}}
			>
				{
					!isDataPending && menuOptions.map((item, ind) => {
						const { name } = item
						const shouldLinkBikeBrand = isBikeBrandLevel(item)

						return (
							<Box
								key={ind}
								sx={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									width: "100%",
									cursor: "pointer"
								}}
								onClick={() => shouldLinkBikeBrand ? undefined : handleMenuItemClick(item)}
							>
								<Typography
									sx={{
										fontSize: "1.375rem",
										paddingY: "1rem",
										lineHeight: 1,
										fontWeight: 700,
										color: 'white',
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
									sx={{
										color: "white",
										fontSize: 30,
										my: 'auto',
									}}
									onClick={(event) => {
										if (!shouldLinkBikeBrand) return

										event.stopPropagation()
										handleMenuItemClick(item)
									}}
								/>
							</Box>
						)
					})
				}
			</Box>
		</Drawer>
	)
}

export default MobileNavMenu
