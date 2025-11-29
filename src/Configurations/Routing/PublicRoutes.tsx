import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Box } from '@mui/material'

import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import { ROUTES } from '@/Constants/Routes'
import SignupPopup from '@/components/SignupPopup'
import CartSidebar from '@/components/CartSidebar'
import { appServiceOnMount, onMountChecks } from '@/Configurations/Service/AppService'

function PublicRoutes() {
	const location = useLocation()

	useEffect(() => {
		appServiceOnMount()
		onMountChecks()
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
