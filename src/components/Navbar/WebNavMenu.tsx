import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import {
	Box,
	Typography,
	Popover,
	Divider
} from "@mui/material";
import { MenuOptionsType } from "./Types";
import { replaceSpacesWithHiphen } from "@/Utils/StringUtils";
import { getMenuOption } from "./Utils";
import { ROUTES } from "@/Constants/Routes";

type WebNavMenuPropsType = {
	menuName: string
	anchorEl: Element | null
	onClose: () => void
}

export default function WebNavMenu({ menuName, anchorEl, onClose }: WebNavMenuPropsType) {
	const navigate = useNavigate()

	const menuOptions: MenuOptionsType[] = useMemo(() => {
		return getMenuOption().find(item => item.name === menuName)?.models || []
	}, [menuName])

	function handleItemClick(category: string, subCategory: string, _id: string) {
		const prefixRoute = getMenuOption().find(item => item.name === menuName)?.route || ''
		const name = replaceSpacesWithHiphen(`${category}/${subCategory}/${_id}`)
		const routeName = `${prefixRoute}/${name}`

		navigate(routeName)
		onClose()
	}

	function handleCategoryClick(category: string) {
		navigate(ROUTES.PRODUCT_CATALOG, { state: { category } })
		onClose()
	}

	if (!menuOptions || menuOptions.length === 0) return null

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
				{menuOptions.map((item) => (
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
								cursor: item.models?.length ? "none" : "pointer",
								"&:hover": { color: item.models?.length ? "#FFF" : "#ff3f6c" },
							}}
							onClick={() => !item.models?.length && handleCategoryClick(item.name)}
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
									onClick={() => handleItemClick(item.name, name, _id)}
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
