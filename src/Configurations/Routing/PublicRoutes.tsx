import React from 'react'
import { Outlet } from 'react-router'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

function PublicRoutes() {
	return (
		<div className="min-h-screen">
			<Header />
			<Outlet />
			<Footer />
			<WhatsAppButton />
		</div>
	)
}

export default PublicRoutes
