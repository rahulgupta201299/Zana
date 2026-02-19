import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	Box,
	Typography,
	TextField,
	Stack,
	Chip,
	Divider,
	IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { setOpenCouponDialog } from "@/Redux/Cart/Reducer";
import { Button } from "./ui/button";

const couponsData = [
	{
		_id: "1",
		code: "BULK15",
		type: "Percentage",
		discount: 15,
		description: "15% off on bulk orders above ₹5000",
	},
	{
		_id: "2",
		code: "UNLIMITED",
		type: "Flat",
		discount: 75,
		description: "₹75 off on orders above ₹300",
	},
	{
		_id: "3",
		code: "WELCOME",
		type: "First Order",
		discount: 150,
		description: "₹150 off on first purchase",
	},
];

export default function CouponDialog() {
	const [promoCode, setPromoCode] = useState("");
	const [appliedCode, setAppliedCode] = useState<string | null>(null);

	const dispatch = useDispatch();

	async function handleApply(code: string) {
		setAppliedCode(code);
		// onApply(code);
	};

	function onClose() {
		dispatch(setOpenCouponDialog(false));
		setPromoCode("");
		setAppliedCode(null);
	}

	return (
		<Dialog
			open={true}
			onClose={onClose}
			fullWidth
			maxWidth="sm"
			PaperProps={{
				sx: {
					background: "#121212",
					borderRadius: 3,
					border: "1px solid #2A2A2A",
				},
			}}
		>
			<DialogTitle
				sx={{
					color: "#E5E5E5",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					pb: 1
				}}
			>
				<Box>
					<Typography variant="h6" sx={{ fontWeight: 600 }}>
						Available Coupons
					</Typography>

					<Typography
						variant="body2"
						sx={{ color: "#9E9E9E", mt: 0.5 }}
					>
						Apply a coupon to save on your order
					</Typography>
				</Box>

				<IconButton onClick={onClose}>
					<CloseIcon sx={{ color: "#aaa" }} />
				</IconButton>
			</DialogTitle>

			<DialogContent>
				{/* Promo Code Input */}
				<Stack direction="row" spacing={2} mb={3} mt={3}>
					<TextField
						fullWidth
						value={promoCode}
						onChange={(e) => setPromoCode(e.target.value.toUpperCase().trim())}
						placeholder="Enter promo code"
						variant="outlined"
						sx={{
							input: { color: "#fff" },
							"& .MuiOutlinedInput-root": {
								backgroundColor: "#1E1E1E",
								"& fieldset": {
									borderColor: "#2A2A2A",
								},
								"&:hover fieldset": {
									borderColor: "#FACC15",
								},
								"&.Mui-focused fieldset": {
									borderColor: "#FACC15",
								},
							},
						}}
					/>
					<Button
						className="bg-black border-2 border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-colors duration-200 h-100 font-bold"
						onClick={() => handleApply(promoCode)}
						disabled={!promoCode}
					>
						Apply
					</Button>
				</Stack>

				<Divider sx={{ borderColor: "#2A2A2A", mb: 2 }} />

				{/* Coupon List */}
				<Stack spacing={2}>
					{couponsData.map((coupon) => {
						return (
							<Box
								key={coupon._id}
								sx={{
									background: "#1A1A1A",
									borderRadius: 3,
									border: "1px solid #2A2A2A",
									p: 2,
									transition: "0.3s",
									"&:hover": {
										borderColor: "#7C3AED",
									},
								}}
							>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
								>
									<Box>
										<Typography
											variant="h6"
											sx={{ color: "#fff", fontWeight: 600 }}
										>
											{coupon.code}
										</Typography>

										<Typography
											variant="body2"
											sx={{ color: "#9CA3AF", mt: 0.5 }}
										>
											{coupon.description}
										</Typography>

										<Chip
											label={`${coupon.discount}${coupon.type === "Percentage" ? "%" : "₹"
												} OFF`}
											size="small"
											sx={{
												mt: 1,
												backgroundColor: "rgba(124,58,237,0.15)",
												color: "#A78BFA",
												border: "1px solid #7C3AED",
											}}
										/>
									</Box>

									<Button
										className="bg-black border border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-colors duration-200 font-bold"
									>
										Apply
									</Button>
								</Stack>
							</Box>
						)
					})}
				</Stack>

				{appliedCode && (
					<Box
						mt={3}
						p={2}
						sx={{
							background: "rgba(16,185,129,0.1)",
							border: "1px solid #10B981",
							borderRadius: 2,
							display: "flex",
							alignItems: "center",
							gap: 1,
						}}
					>
						<CheckCircleIcon sx={{ color: "#10B981" }} />
						<Typography sx={{ color: "#10B981", fontWeight: 500 }}>
							Coupon Applied: {appliedCode}
						</Typography>
					</Box>
				)}
			</DialogContent>
		</Dialog>
	);
}
