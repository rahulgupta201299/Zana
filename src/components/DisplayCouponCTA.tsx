import { enqueueSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, Typography } from '@mui/material';
import { TAppDispatch, TAppStore } from '@/Configurations/AppStore';
import { setOpenCouponDialog } from '@/Redux/Cart/Reducer';
import { cartDetailSelector } from '@/Redux/Cart/Selectors';
import removeCouponServiceAction from '@/Redux/Cart/Services/RemoveCouponService';
import { getLoginDetails } from '@/Redux/Auth/Selectors';
import { isServiceLoading } from '@/Redux/ServiceTracker/Selectors';
import { removeCouponServiceName } from '@/Redux/Cart/Action';
import Loading from './Loading';

function DisplayCouponCTA() {
	const cartDetail = useSelector(cartDetailSelector);
	const loginDetails = useSelector(getLoginDetails);
	const isLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [removeCouponServiceName]));

	const { discountAmount = 0 } = cartDetail;
	const { phoneNumber = "" } = loginDetails;

	const dispatch = useDispatch<TAppDispatch>()

	function handleApplyCoupon() {
		dispatch(setOpenCouponDialog(true))
	}

	async function handleRemoveCoupon() {
		try {
			await dispatch(removeCouponServiceAction({ phoneNumber }))
			enqueueSnackbar({
				message: 'Coupon removed successfully',
				variant: 'success',
			})
		} catch (error: any) {
			enqueueSnackbar({
				message: 'Failed to remove coupon',
				variant: 'error',
			})
		}
	}

	return (
		<Stack direction="row" justifyContent="space-between">
			{isLoading && <Loading />}
			{
				discountAmount > 0 && (
					<Typography
						sx={{
							textTransform: 'uppercase',
							fontSize: '0.875rem',
							fontWeight: 700,
							color: '#EF4444',
							cursor: "pointer",
							"&:hover": {
								opacity: 0.8,
							},
						}}
						onClick={handleRemoveCoupon}
					>
						remove coupon
					</Typography>
				)
			}
			<Typography
				sx={{
					textTransform: 'uppercase',
					fontSize: '0.875rem',
					fontWeight: 700,
					color: '#3B82F6',
					cursor: "pointer",
					"&:hover": {
						opacity: 0.8,
					},
					marginLeft: "auto"
				}}
				onClick={handleApplyCoupon}
			>
				{discountAmount > 0 ? "update" : "apply"} coupon
			</Typography>
		</Stack>
	)
}

export default DisplayCouponCTA
