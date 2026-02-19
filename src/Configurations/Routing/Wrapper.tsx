import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Box } from '@mui/material'

import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import { ROUTES } from '@/Constants/Routes'
import SignupPopup from '@/components/SignupPopup'
import CartSidebar from '@/components/CartSidebar'
import { useNetwork } from '@/Configurations/Service/useNetwork'
import CartAttentionDialog from '@/components/CartAttentionDialog'
import Loading from '@/components/Loading'
import { useSelector } from 'react-redux'
import { TAppStore } from '../AppStore'
import { isServiceLoading } from '@/Redux/ServiceTracker/Selectors'
import { cartModifyServiceName } from '@/Redux/Cart/Action'
import { openCartSelector } from '@/Redux/Cart/Selectors'
import OrderConfirmDialog from '@/pages/OrderDetails/OrderConfirmModal'
import CouponDialog from '@/components/CoupounDialog'
import { onMountChecks } from '../Service/Service'

function Wrapper() {
	const location = useLocation()
	const isLoadig = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [cartModifyServiceName]))
	const isOpenCart = useSelector(openCartSelector)
	const isOpenSignupPopup = useSelector((state: TAppStore) => state.auth.openSignupPopup)
	const isOpenCouponDialog = useSelector((state: TAppStore) => state.cart.isOpenCouponDialog)

	useNetwork()

	useEffect(() => {
		window.scrollTo(0, 0);
		onMountChecks()
	}, [location.pathname])

	return (
		<Box sx={{ minHeight: "100vh" }}>
			{isLoadig && <Loading />}
			<Navbar />
			{location.pathname !== ROUTES.BASE_URL && <Box sx={{ mt: { md: 20.5, xs: 10.5 } }} />}
			{isOpenSignupPopup && <SignupPopup />}
			{isOpenCart && <CartSidebar />}
			{isOpenCouponDialog && <CouponDialog />}
			<Outlet />
			<Footer />
			<WhatsAppButton />
			<CartAttentionDialog />
			<OrderConfirmDialog />
		</Box>
	)
}

export default Wrapper
