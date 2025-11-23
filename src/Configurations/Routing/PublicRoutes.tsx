import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Box } from '@mui/material'

import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import { ROUTES } from '@/Constants/Routes'

function PublicRoutes() {

	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
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
