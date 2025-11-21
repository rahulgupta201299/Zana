import React, { useMemo, useState } from "react";
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
	name: string
	onClose: () => void
}

export default function WebNavMenu({ name, onClose }: WebNavMenuPropsType) {
	const [anchorEl, setAnchorEl] = useState(null);

	const navigate = useNavigate()

	// const handleOpen = (event) => setAnchorEl(event.currentTarget);
	// const handleClose = () => setAnchorEl(null);

	const open = Boolean(anchorEl);

	const getMenuOptions: MenuOptionsType[] = useMemo(() => {
		return MenuOption.find(item => item.name === name)?.models || []
	}, [name])

	if (!getMenuOptions || getMenuOptions.length === 0) return null

	return (
		<Popover
			anchorEl={anchorEl}
			open={true}
			onClose={onClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			transformOrigin={{ vertical: "top", horizontal: "left" }}
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

						{item.models?.map((model) => (
							<Typography
								key={model._id}
								sx={{
									fontSize: "0.875rem",
									color: "#ffffffb3",
									my: "3px",
									cursor: "pointer",
									"&:hover": { color: "#ff3f6c" },
								}}
								onClick={() =>
									navigate(model.name.toLowerCase().replace(/\s+/g, "-"))
								}
							>
								{model.name}
							</Typography>
						))}

						<Divider sx={{ my: 1, background: "white" }} />
					</Box>
				))}
			</Box>
		</Popover>
	);
}
