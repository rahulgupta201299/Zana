import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
	Skeleton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { setOpenCouponDialog } from "@/Redux/Cart/Reducer";
import { Button } from "./ui/button";
import allCouponServiceAction from "@/Redux/Cart/Services/AllCouponService";
import { AllCouponResType, ApplyCouponResType, CouponDetailsType } from "@/Redux/Cart/Types";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { COUPON_TYPE } from "@/Constants/AppConstant";
import { isServiceError, isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { allCouponServiceName, applyCouponServiceName, removeCouponServiceName } from "@/Redux/Cart/Action";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import { enqueueSnackbar } from "notistack";
import removeCouponServiceAction from "@/Redux/Cart/Services/RemoveCouponService";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import applyCouponServiceAction from "@/Redux/Cart/Services/ApplyCouponService";
import Loading from "./Loading";

export default function CouponDialog() {
	const isAllCouponLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [allCouponServiceName]));
	const isAllCouponError = useSelector<TAppStore, boolean>(state => isServiceError(state, [allCouponServiceName]));
	const isLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [applyCouponServiceName, removeCouponServiceName]));
	const cartDetail = useSelector(cartDetailSelector);
	const loginDetails = useSelector(getLoginDetails);

	const { couponCode = '', discountAmount = 0, totalAmount: cartTotalAmount = 0 } = cartDetail;
	const { phoneNumber = "" } = loginDetails;

	const [totalPages, setTotalPages] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [currentLimit, setCurrentLimit] = useState<number>(0);
	const [couponsData, setCouponsData] = useState<CouponDetailsType[]>([]);
	const [promoCode, setPromoCode] = useState("");

	const dispatch = useDispatch<TAppDispatch>();

	async function handleApply(code: string) {
		try {
			await dispatch(applyCouponServiceAction({ phoneNumber, couponCode: code })) as ApplyCouponResType
			enqueueSnackbar({
				message: 'Coupon applied successfully',
				variant: 'success',
			})
		} catch (error: any) {
			const { message = '' } = error;
			enqueueSnackbar({
				message: message || 'Failed to apply coupon',
				variant: 'error',
			})
		}
	}

	async function handleRemoveCoupon() {
		try {
			await dispatch(removeCouponServiceAction({ phoneNumber }))
			enqueueSnackbar({
				message: 'Coupon removed successfully',
				variant: 'success',
			})
			setPromoCode("");
		} catch (error: any) {
			enqueueSnackbar({
				message: 'Failed to remove coupon',
				variant: 'error',
			})
		}
	}

	function onClose() {
		dispatch(setOpenCouponDialog(false));
		setPromoCode("");
	}

	async function loadCoupons(newPage: number) {
		try {
			const { coupons, pagination: { page, limit, pages } } = await dispatch(allCouponServiceAction({ page: newPage, limit: currentLimit })) as AllCouponResType;
			setCouponsData(prev => ([...prev, ...coupons]));
			setCurrentPage(page);
			setCurrentLimit(limit);
			setTotalPages(pages);
		} catch (error: any) {
			enqueueSnackbar({
				message: 'Failed to load coupons',
				variant: 'error',
			})
		}
	}

	useEffect(() => {
		loadCoupons(1);
	}, [])

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
					maxHeight: "80vh",
				},
			}}
		>
			{isLoading && <Loading />}
			<DialogTitle
				sx={{
					position: "sticky",
					color: "#E5E5E5",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-start",
					pb: 1,
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

			<DialogContent style={{ position: "relative", paddingBottom: 0 }}>
				<Box style={{ position: "sticky", top: 0, backgroundColor: '#121212', zIndex: 5 }}>
					<Stack direction="row" spacing={2} pt={3} pb={3}>
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
				</Box>

				<Stack spacing={2}>
					{
						isAllCouponError && couponsData.length === 0 && (
							<Box
								sx={{
									background: "#222222",
									border: "1px solid #2A2A2A",
									borderRadius: 3,
									p: 4,
									textAlign: "center",
								}}
							>
								<Typography
									variant="h6"
									sx={{ color: "#EF4444", fontWeight: 600 }}
								>
									Failed to load coupons
								</Typography>

								<Typography
									variant="body2"
									sx={{ color: "#9CA3AF", mt: 1 }}
								>
									Please try again later.
								</Typography>

								<Button
									className="mt-3 px-4 py-2 rounded-lg bg-black border border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-colors duration-200 font-bold"
									onClick={() => loadCoupons(currentPage + 1)}
								>
									Reload
								</Button>
							</Box>
						)
					}
					{couponsData.map((coupon) => {
						const { _id = '', code = '', description = '', discount = 0, type = '', maxDiscount = 0, minCartAmount = 0, isActive = false, expiresAt = '' } = coupon;

						const isDisabled = !isActive || code === couponCode || cartTotalAmount < minCartAmount;

						return (
							<Box
								key={_id}
								sx={{
									background: "#1A1A1A",
									borderRadius: 3,
									border: "1px solid #2A2A2A",
									p: 2,
									transition: "0.3s",
									"&:hover": {
										borderColor: "#FACC15",
									},
								}}
							>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="flex-start"
								>
									<Box sx={{ maxWidth: "75%" }}>
										<Stack direction="row" gap="1rem">

											<Typography
												variant="h6"
												sx={{ color: "#fff", fontWeight: 600 }}
											>
												{code}
											</Typography>
											<Chip
												label={`${discount}${type.toUpperCase() === COUPON_TYPE.PERCENTAGE ? "%" : "₹"} OFF`}
												size="small"
												sx={{
													backgroundColor: "rgba(124,58,237,0.15)",
													color: "#A78BFA",
													border: "1px solid #7C3AED",
													margin: 'auto 0'
												}}
											/>
										</Stack>

										<Typography
											variant="body2"
											sx={{ color: "#9CA3AF", mt: 0.5 }}
										>
											{description}
										</Typography>

										<Stack
											direction="row"
											flexWrap="wrap"
											gap={2}
											sx={{ mt: 1.5 }}
										>
											<Typography variant="caption" sx={{ color: "#6B7280" }}>
												Type: <span style={{ color: "#D1D5DB" }}>{type}</span>
											</Typography>

											<Typography variant="caption" sx={{ color: "#6B7280" }}>
												Min Cart:{" "}
												<span style={{ color: "#D1D5DB" }}>
													₹{minCartAmount}
												</span>
											</Typography>

											<Typography variant="caption" sx={{ color: "#6B7280" }}>
												Max Discount:{" "}
												<span style={{ color: "#D1D5DB" }}>
													{maxDiscount ? `₹${maxDiscount}` : "No Limit"}
												</span>
											</Typography>

											<Typography variant="caption" sx={{ color: "#6B7280" }}>
												Status:{" "}
												<span
													style={{
														color: isActive ? "#22C55E" : "#EF4444",
													}}
												>
													{isActive ? "Active" : "Inactive"}
												</span>
											</Typography>

											<Typography variant="caption" sx={{ color: "#6B7280" }}>
												Expiry:{" "}
												<span style={{ color: "#D1D5DB" }}>
													{expiresAt
														? new Date(expiresAt).toLocaleDateString()
														: "No Expiry"}
												</span>
											</Typography>
										</Stack>
									</Box>

									<Button
										className="bg-black border border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-colors duration-200 font-bold"
										disabled={isDisabled}
										onClick={() => handleApply(code)}
									>
										Apply
									</Button>
								</Stack>
							</Box>
						)
					})}
					{
						!isAllCouponLoading && currentPage < totalPages && (
							<Box textAlign="center" mt={3}>
								<Button
									onClick={() => loadCoupons(currentPage + 1)}
									className="px-6 py-2 bg-black border border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15] hover:text-black transition-colors duration-200 font-bold"
								>
									Load More
								</Button>
							</Box>
						)
					}
					{
						isAllCouponLoading && Array.from({ length: 5 }).map((_, index) => (
							<Skeleton key={index} variant="rectangular" height={80} sx={{ borderRadius: 3, backgroundColor: "#2A2A2A" }} />
						))
					}
				</Stack>

				<Box
					sx={{
						position: "sticky",
						bottom: 0,
						backgroundColor: "#121212",
						zIndex: 10,
						pb: 2,
					}}
				>
					{couponCode && (
						<Box
							sx={{
								background: "rgba(16,185,129,0.1)",
								border: "1px solid #10B981",
								borderRadius: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								p: 2,
								mt: 2,
							}}
						>
							<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
								<CheckCircleIcon sx={{ color: "#10B981" }} />
								<Typography sx={{ color: "#10B981", fontWeight: 500 }}>
									Coupon Applied: {couponCode}
								</Typography>
							</Box>

							<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
								<Typography sx={{ color: "#10B981", fontWeight: 600 }}>
									- ₹{discountAmount}
								</Typography>

								<IconButton
									size="small"
									onClick={handleRemoveCoupon}
									sx={{
										color: "#10B981",
										"&:hover": {
											backgroundColor: "rgba(239,68,68,0.15)",
											color: "#EF4444",
										},
									}}
								>
									<CloseIcon fontSize="small" />
								</IconButton>
							</Box>
						</Box>
					)}
				</Box>
			</DialogContent>
		</Dialog>
	);
}
