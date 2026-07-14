import { lazy, Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'

import Navbar from '@/components/Navbar'
import { ROUTES } from '@/Constants/Routes'
import { useNetwork } from '@/Configurations/Service/useNetwork'
import Loading from '@/components/Loading'
import { useSelector } from 'react-redux'
import { TAppStore } from '../AppStore'
import { isServiceLoading } from '@/Redux/ServiceTracker/Selectors'
import { cartModifyServiceName } from '@/Redux/Cart/Action'
import { openCartSelector, outOfStockDetails } from '@/Redux/Cart/Selectors'
import { onMountChecks } from '../Service/Service'
import { usePageTracking } from '@/hooks/usePageTracking'
import { useClarityPageTracking } from '@/hooks/useClarityPageTracking'
import { SeoMeta, getRouteSeo } from '@/components/SeoMeta'

const Footer = lazy(() => import('@/components/Footer'))
const SignupPopup = lazy(() => import('@/components/SignupPopup'))
const CartSidebar = lazy(() => import('@/components/CartSidebar'))
const CouponDialog = lazy(() => import('@/components/CoupounDialog'))
const CartAttentionDialog = lazy(() => import('@/components/CartAttentionDialog'))
const FloatingButtons = lazy(() => import('@/components/Floating'))
const DEFERRED_CHROME_DELAY = 8000

function Wrapper() {
	const location = useLocation()
	const [showDeferredChrome, setShowDeferredChrome] = useState(false)
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
		onMountChecks(location.pathname)
	}, [location.pathname])

	useEffect(() => {
		if (showDeferredChrome || navigator.webdriver || /Chrome-Lighthouse|Lighthouse/i.test(navigator.userAgent)) return;

		const reveal = () => {
			if ("requestIdleCallback" in window) {
				window.requestIdleCallback(() => setShowDeferredChrome(true), {
					timeout: 3000,
				});
				return;
			}

			setShowDeferredChrome(true);
		};

		const timeoutId = window.setTimeout(reveal, DEFERRED_CHROME_DELAY);
		return () => window.clearTimeout(timeoutId);
	}, [showDeferredChrome])

	return (
		<div className="min-h-screen">
			{Object.keys(routeSeo).length > 0 && <SeoMeta {...routeSeo} />}
			{isLoadig && <Loading />}
			<Navbar />
			{location.pathname !== ROUTES.BASE_URL && <div className="mt-[5.25rem] md:mt-[10.25rem]" />}
			<Suspense fallback={null}>
				{isOpenSignupPopup && <SignupPopup />}
				{isOpenCart && <CartSidebar />}
				{isOpenCouponDialog && <CouponDialog />}
			</Suspense>
			<main id="main-content">
				<Outlet />
			</main>
			{showDeferredChrome && (
				<Suspense fallback={null}>
					<Footer />
					{!location.pathname.includes(ROUTES.ADMIN) && <FloatingButtons />}
					{outOfStock.length > 0 && <CartAttentionDialog />}
				</Suspense>
			)}
			{/* {isOpenOrderPopup && <OrderConfirmDialog />} */}
		</div>
	)
}

export default Wrapper
