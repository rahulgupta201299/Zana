import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Box } from '@mui/material'

import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import { ROUTES } from '@/Constants/Routes'
import { useDispatch, useSelector } from 'react-redux'
import ShopByBikeService from '@/Redux/Product/Services/ShopByBikeService'
import { TAppDispatch } from '@/Configurations/AppStore'
import { productCategorySelector, shopByBikeSelector, zProBikeSelector } from '@/Redux/Product/Selectors'
import ProductCategoryCountService from '@/Redux/Product/Services/ProductCategoryCountService'
import { BikeCategoryEnum } from '@/Constants/AppConstant'
import ZProBikeService from '@/Redux/Product/Services/ZProBikeService'
import SignupPopup from '@/components/SignupPopup'
import CartSidebar from '@/components/CartSidebar'

function PublicRoutes() {

	const shopByBike = useSelector(shopByBikeSelector)
	const zProBike = useSelector(zProBikeSelector)
	const productCategory = useSelector(productCategorySelector)

	const location = useLocation()
	const dispatch = useDispatch<TAppDispatch>()

	async function pageOps() {
		window.scrollTo(0, 0)
		try {
			if (!shopByBike.length) await dispatch(ShopByBikeService({ category: BikeCategoryEnum.ZANA }))
			if (!zProBike.length) await dispatch(ZProBikeService({ category: BikeCategoryEnum.ZPRO }))
			if (!productCategory.length) await dispatch(ProductCategoryCountService())
		} catch (error: any) {

		}
	}

	useEffect(() => {
		pageOps()
	}, [location.pathname])

	return (
		<Box sx={{ minHeight: "100vh" }}>
			<Navbar />
			{location.pathname !== ROUTES.BASE_URL && <Box sx={{ mt: { md: 20.5, xs: 10.5 } }} />}
			<SignupPopup />
			<CartSidebar />
			<Outlet />
			<Footer />
			<WhatsAppButton />
		</Box>
	)
}

export default PublicRoutes
