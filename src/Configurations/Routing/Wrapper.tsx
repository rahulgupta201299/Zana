import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'

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
import { openCartSelector, outOfStockDetails } from '@/Redux/Cart/Selectors'
import OrderConfirmDialog from '@/pages/OrderDetails/OrderConfirmModal'
import CouponDialog from '@/components/CoupounDialog'
import { onMountChecks } from '../Service/Service'
import FloatingButtons from '@/components/Floating'
import { usePageTracking } from '@/hooks/usePageTracking'
import { useClarityPageTracking } from '@/hooks/useClarityPageTracking'
import { SeoMeta, getRouteSeo } from '@/components/SeoMeta'

function Wrapper() {
	const location = useLocation()
	const isLoadig = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [cartModifyServiceName]))
	const isOpenCart = useSelector(openCartSelector)
	const isOpenSignupPopup = useSelector((state: TAppStore) => state.auth.openSignupPopup)
	const isOpenCouponDialog = useSelector((state: TAppStore) => state.cart.isOpenCouponDialog)
	// const isOpenOrderPopup = useSelector((state: TAppStore) => state.order.openOrderPopup)
	const outOfStock = useSelector(outOfStockDetails)
	const routeSeo = getRouteSeo(location.pathname)

	useNetwork()
	usePageTracking();
	useClarityPageTracking();

	useEffect(() => {
		window.scrollTo(0, 0);
		onMountChecks()
	}, [location.pathname])

	return (
		<div className="min-h-screen">
			{Object.keys(routeSeo).length > 0 && <SeoMeta {...routeSeo} />}
			{isLoadig && <Loading />}
			<Navbar />
			{location.pathname !== ROUTES.BASE_URL && <div className="mt-[5.25rem] md:mt-[10.25rem]" />}
			{isOpenSignupPopup && <SignupPopup />}
			{isOpenCart && <CartSidebar />}
			{isOpenCouponDialog && <CouponDialog />}
			<Outlet />
			<Footer />
			{!location.pathname.includes(ROUTES.ADMIN) && <FloatingButtons />}
			{outOfStock.length > 0 && <CartAttentionDialog />}
			{/* {isOpenOrderPopup && <OrderConfirmDialog />} */}
		</div>
	)
}

export default Wrapper
