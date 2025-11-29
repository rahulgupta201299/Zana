import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MenuOptionsType } from './Types';
import { replaceSpacesWithHiphen } from '@/Utils/StringUtils';
import { getMenuOption } from './Utils';
import MobileNavMenuSkeleton from '@/components/Skeleton/MobileNavMenuSkeleton';
import { productCategorySelector, shopByBikeSelector, zProBikeSelector } from '@/Redux/Product/Selectors';
import { TAppStore } from '@/Configurations/AppStore';
import { isServiceLoading } from '@/Redux/ServiceTracker/Selectors';
import { categoryProductServiceName, shopByBikeServiceName, zProBikeServiceName } from '@/Redux/Product/Actions';

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

	function handleMenuItemClick(item: MenuOptionsType) {
		const { name, _id, models = [], route } = item

		if (route && models.length === 0) {
			navigate(route, { state: { category: name } })
			onClose()
			return
		}

		historyStackRef.current.push(item)

		if (route) routeRef.current = route + '/'
		else routeRef.current += replaceSpacesWithHiphen(name) + '/'

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
					<IconButton onClick={onClose}>
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
						>
							<ArrowBackIosNewIcon fontSize="small" />
						</IconButton>

						<Typography
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
								onClick={() => handleMenuItemClick(item)}
							>
								<Typography
									sx={{
										fontSize: "1.375rem",
										paddingY: "1rem",
										lineHeight: 1,
										fontWeight: 700,
										color: 'white',
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
