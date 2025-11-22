import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import {
	Box,
	Typography,
	Popover,
	Divider
} from "@mui/material";
import { MenuOption } from "./Constant";
import { MenuOptionsType } from "./Types";

type WebNavMenuPropsType = {
	menuName: string
	anchorEl: Element | null
	onClose: () => void
}

export default function WebNavMenu({ menuName, anchorEl, onClose }: WebNavMenuPropsType) {
	const navigate = useNavigate()

	const getMenuOptions: MenuOptionsType[] = useMemo(() => {
		return MenuOption.find(item => item.name === menuName)?.models || []
	}, [menuName])

	function handleClick(category: string, subCategory: string, _id: string) {
		const prefixRoute = MenuOption.find(item => item.name === menuName)?.route || ''
		const name = `${category}/${subCategory}/${_id}`.split(' ').join('-').toLowerCase()
		const routeName = `${prefixRoute}/${name}`

		navigate(routeName)
		onClose()
	}

	if (!getMenuOptions || getMenuOptions.length === 0) return null

	return (
		<Popover
			anchorEl={anchorEl}
			open={true}
			onClose={onClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			PaperProps={{
				sx: {
					width: "90%",
					borderRadius: "1rem",
					p: 3,
					bgcolor: "black",
					color: "white",
				},
			}}
		>
			<Box
				sx={{
					columnCount: 4,
					columnGap: "40px",
					paddingX: "20px",
					paddingY: "10px",
				}}
			>
				{getMenuOptions.map((item) => (
					<Box
						key={item._id}
						sx={{
							breakInside: "avoid",
							mb: 3,
						}}
					>
						<Typography
							sx={{
								fontWeight: 700,
								fontSize: "1rem",
								mb: "6px",
							}}
						>
							{item.name}
						</Typography>

						{item.models?.map((model) => {
							const { name, _id } = model
							return (
								<Typography
									key={model._id}
									sx={{
										fontSize: "0.875rem",
										color: "#ffffffb3",
										my: "3px",
										cursor: "pointer",
										"&:hover": { color: "#ff3f6c" },
									}}
									onClick={() => handleClick(item.name, name, _id)}
								>
									{model.name}
								</Typography>
							)
						})}

						<Divider sx={{ my: 1, background: "white" }} />
					</Box>
				))}
			</Box>
		</Popover>
	);
}
