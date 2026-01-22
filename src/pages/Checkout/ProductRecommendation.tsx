import React, { MouseEvent } from "react";
import { useNavigate } from "react-router";
import { Box, Typography, Button } from "@mui/material";
import { capProducts } from "@/components/CapSection";
import { ROUTES } from "@/Constants/Routes";
import useCart from "@/hooks/useCart";

export default function ProductRecommendation() {

	const navigate = useNavigate()

	const { incrementToCart } = useCart()

	function handleAddToCart(e: MouseEvent<HTMLButtonElement>, productId: string, quantityAvailable: number) {
		e.stopPropagation()
		// incrementToCart(productId, quantityAvailable, { saveToDb: true })
	}

	// TODO handle Button UI

	return (
		<Box
			sx={{
				mt: 6,
				width: "100%",
				height: 500,
				overflow: "hidden",
				position: "relative",
				backgroundColor: "gray",
				borderRadius: 2,
				p: 2,
			}}
		>
			{/* Sticky Header */}
			<Box
				sx={{
					position: "sticky",
					top: 0,
					zIndex: 3,
					backgroundColor: "gray",
					pb: 1,
				}}
			>
				<Typography
					sx={{
						fontSize: "1.3rem",
						color: "white",
						fontWeight: 700,
						textAlign: "center",
					}}
				>
					You May Also Like
				</Typography>
			</Box>

			{/* Scrollable Product List */}
			<Box
				sx={{
					mt: 1,
					height: "100%",
					overflowY: "auto",
					pr: 1,
					pb: 8,
				}}
			>
				{capProducts.map((item) => {
					const { image, _id, name, price, quantityAvailable } = item;

					return (
						<Box
							key={_id}
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 3,
								p: 1.5,
								mb: 1,
								borderRadius: 2,
								background: "white",
								boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
								cursor: 'pointer'
							}}
							onClick={() => navigate(ROUTES.PRODUCT_CATALOG)}
						>
							{/* Image */}
							<Box
								sx={{
									width: 65,
									height: 65,
									borderRadius: 1.5,
									overflow: "hidden",
								}}
							>
								<img
									src={image}
									alt={name}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</Box>

							{/* Product Info */}
							<Box sx={{ flex: 1 }}>
								<Typography
									fontWeight={600}
									sx={{ fontSize: "14px", lineHeight: 1.2, mb: 0.5 }}
								>
									{name}
								</Typography>

								<Typography
									sx={{
										fontWeight: 700,
										color: "green",
										fontSize: "16px",
									}}
								>
									₹ {price}
								</Typography>
							</Box>

							{/* Add Button */}
							<Button
								variant="outlined"
								sx={{
									borderRadius: 1.5,
									borderColor: "#ff3f6c",
									color: "#ff3f6c",
									textTransform: "none",
									fontWeight: 600,
									width: 70,
									height: 30,
									fontSize: "12px",
								}}
								onClick={(e: MouseEvent<HTMLButtonElement>) => handleAddToCart(e, _id, quantityAvailable)}
							>
								Add
							</Button>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
}
