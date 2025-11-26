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
import { productCategorySelector, shopByBikeSelector } from '@/Redux/Product/Selectors'
import ProductCategoryCountService from '@/Redux/Product/Services/ProductCategoryCountService'

function PublicRoutes() {

	const shopByBike = useSelector(shopByBikeSelector)
	const productCategory = useSelector(productCategorySelector)

	const location = useLocation()
	const dispatch = useDispatch<TAppDispatch>()

	async function pageOps() {
		window.scrollTo(0, 0)
		try {
			if (!shopByBike.length) await dispatch(ShopByBikeService())
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
			{location.pathname !== ROUTES.BASE_URL && <Box sx={{ mt: {md: 20.5, xs: 10.5} }} />}
			<Outlet />
			<Footer />
			<WhatsAppButton />
		</Box>
	)
}

export default PublicRoutes
