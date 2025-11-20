import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MenuItems } from './Constant';
import { MenuItemsType } from './Types';

type MobileNavMenuPropsType = {
	onClose: () => void;
};

function MobileNavMenu({ onClose }: MobileNavMenuPropsType) {

	const [selectedMenuItem, setSelectedMenuItem] = useState<string>('')
	const [menuOptions, setMenuOptions] = useState<MenuItemsType[]>(MenuItems)

	function handleMenuItemClick() {
		
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
					overflow: "hidden",
					padding: "2rem",
				},
			}}
			ModalProps={{
				keepMounted: true,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end"
				}}
			>
				<IconButton onClick={onClose}>
					<CloseIcon sx={{ color: "white", fontSize: 30 }} />
				</IconButton>
			</Box>
			<Box
				sx={{
					marginTop: "1rem",
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
									backgroundColor: name === selectedMenuItem ? '#1976D2' : 'none',
								}}
								onClick={handleMenuItemClick}
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
