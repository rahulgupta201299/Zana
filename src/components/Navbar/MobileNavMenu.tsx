import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { MenuOption } from './Constant';
import { MenuOptionsType } from './Types';

type MobileNavMenuPropsType = {
	onClose: () => void;
};

function MobileNavMenu({ onClose }: MobileNavMenuPropsType) {

	const [selectedMenuItem, setSelectedMenuItem] = useState<string>('')
	const [menuOptions, setMenuOptions] = useState<MenuOptionsType[]>(MenuOption)
	const routeRef = useRef<MenuOptionsType[]>([])

	const navigate = useNavigate()

	function handleMenuItemClick(item: MenuOptionsType) {
		const { name, _id, models = [], route } = item

		if (route) {
			navigate(route)
			onClose()
			return
		}

		if (models.length === 0) {
			const newRoute = name.toLowerCase().split(' ').join('-')
			navigate(newRoute)
			onClose()
			return
		}

		routeRef.current.push(item)
		setSelectedMenuItem(name)
		setMenuOptions(models)
	}

	function handleBack() {
		routeRef.current.pop()
		const lastObject = routeRef.current.at(-1)
		const { name = '', models = [] } = lastObject || {}

		setSelectedMenuItem(name)

		if (models.length) setMenuOptions(models)
		else setMenuOptions(MenuOption)
	}

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
						marginRight: "3rem"
					}}
				>
					<IconButton onClick={onClose}>
						<CloseIcon sx={{ color: "white", fontSize: 30 }} />
					</IconButton>
				</Box>
			</Box>
			{
				routeRef.current.length > 0 && (
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
							{routeRef.current.at(-1).name}
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
					menuOptions.map((item, ind) => {
						const { name } = item
						return (
							<Box
								key={ind}
								sx={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									width: "100%",
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
