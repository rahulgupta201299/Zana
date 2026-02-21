import { useNavigate } from "react-router";
import {
	Box,
	Typography,
	Button,
	Paper,
	Chip,
	Stack,
	Dialog,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useDispatch, useSelector } from "react-redux";
import { TAppStore } from "@/Configurations/AppStore";
import { setOpenOrder } from "@/Redux/Order/Reducer";
import { newOrderPlacedDetails } from "@/Redux/Order/Selectors";
import { ROUTES } from "@/Constants/Routes";

function statusColor(status: string) {
	switch (status.toLowerCase()) {
		case "confirmed":
		case "success":
			return "#22C55E";
		case "processing":
			return "#FACC15";
		case "failed":
		case "cancelled":
			return "#EF4444";
		default:
			return "#A7F3D0";
	}
}

function InfoRow({ label, value }: { label: string; value: string; }) {
	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			spacing={2}
		>
			<Typography sx={{ color: "#9CA3AF" }}>
				{label}
			</Typography>
			<Typography
				sx={{
					color: "#F9FAFB",
					textAlign: "right",
					maxWidth: "60%",
					wordBreak: "break-word",
				}}
			>
				{value}
			</Typography>
		</Stack>
	);
}

export default function OrderConfirmDialog() {
	const newOrderPlaced = useSelector(newOrderPlacedDetails)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	function handleTrackOrder() {
		navigate(ROUTES.ORDER_DETAILS)
		dispatch(setOpenOrder(false))
	}

	function handleReturn() {
		navigate(ROUTES.PRODUCT_CATALOG)
		dispatch(setOpenOrder(false))
	}

	const { orderId = '', orderNumber='', orderStatus='', paymentId='' } = newOrderPlaced;

	return (
		<Dialog
			open={true}
			maxWidth="md"
			fullWidth
			PaperProps={{
				sx: {
					background:
						"radial-gradient(ellipse at top, #0f172a 0%, #020617 70%)",
					borderRadius: 4,
					color: "#F9FAFB",
				},
			}}
			BackdropProps={{
				sx: {
					backgroundColor: "rgba(2, 6, 23, 0.8)",
					backdropFilter: "blur(4px)",
				},
			}}
		>
			<Box sx={{ px: { xs: 3, sm: 5 }, py: 5 }}>
				<Stack direction="row" spacing={1.5} alignItems="center">
					<CheckCircleRoundedIcon
						sx={{ color: "#22C55E", fontSize: 32 }}
					/>
					<Typography variant="h5" fontWeight={600}>
						Thanks for your order!
					</Typography>
				</Stack>

				<Typography
					sx={{
						mt: 2,
						color: "#9CA3AF",
						maxWidth: 720,
						lineHeight: 1.6,
					}}
				>
					Your order{" "}
					<Box component="span" sx={{ color: "#E5E7EB", fontWeight: 500 }}>
						#{orderNumber}
					</Box>{" "}
					has been successfully placed. We'll notify you once your order
					status changes.
				</Typography>

				<Paper
					elevation={0}
					sx={{
						mt: 4,
						p: 3,
						borderRadius: 3,
						backgroundColor: "#111827",
						border: "1px solid #1F2937",
					}}
				>
					<Stack spacing={2.5}>
						<InfoRow label="Order ID" value={orderId} />
						<InfoRow label="Order Number" value={orderNumber} />
						<InfoRow label="Payment ID" value={paymentId} />

						<Stack
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Typography sx={{ color: "#9CA3AF" }}>
								Order Status
							</Typography>
							<Chip
								label={orderStatus}
								sx={{
									backgroundColor: statusColor(orderStatus),
									color: "#022C22",
									fontWeight: 600,
									textTransform: "uppercase",
								}}
							/>
						</Stack>
					</Stack>
				</Paper>

				<Stack
					direction={{ xs: "column", sm: "row" }}
					spacing={2}
					mt={4}
				>
					<Button
						fullWidth
						variant="contained"
						onClick={handleTrackOrder}
						sx={{
							textTransform: "none",
							py: 1.4,
							borderRadius: 2,
							backgroundColor: "#3B82F6",
							"&:hover": { backgroundColor: "#2563EB" },
						}}
					>
						Track your order
					</Button>

					<Button
						fullWidth
						variant="outlined"
						onClick={handleReturn}
						sx={{
							textTransform: "none",
							py: 1.4,
							borderRadius: 2,
							color: "#9CA3AF",
							borderColor: "#374151",
							"&:hover": {
								borderColor: "#4B5563",
								color: "#E5E7EB",
							},
						}}
					>
						Return to shopping
					</Button>
				</Stack>
			</Box>
		</Dialog>
	);
}
