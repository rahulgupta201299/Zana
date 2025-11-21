import React from 'react'

import NewArrivals from '@/components/NewArrivals'
import OurPhilosophy from '@/components/OurPhilosophy'
import GarageFavorite from '@/components/GarageFavorite'
import ShopByBike from '@/components/ShopByBike'
import ShopTheLook from '@/components/ShopTheLook'
import YouTubeSection from '@/components/YouTubeSection'
import InstagramFeed from '@/components/InstagramFeed'
import BlogsSection from '@/components/BlogsSection'
import BrandStory from '@/components/BrandStory'
import TestimonialsSection from '@/components/TestimonialsSection'
import SignupPopup from '@/components/SignupPopup'

function index() {

	function handleAddToCart() {
		// TODO handle this
	}

	return (
		<div className="min-h-screen">
			<OurPhilosophy />
			<GarageFavorite onAddToCart={handleAddToCart} />
			<ShopByBike />
			<ShopTheLook />
			<NewArrivals onAddToCart={handleAddToCart} />
			<YouTubeSection />
			<InstagramFeed />
			<BlogsSection />
			<BrandStory />
			<TestimonialsSection />
			<SignupPopup/>
		</div>
	)
}

export default index
