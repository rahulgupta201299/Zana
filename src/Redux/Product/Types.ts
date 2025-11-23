export type ShopByProductDetailsType = {
	_id: string
	brand: string
	model: string 
	name: string 
	shortDescription: string 
	longDescription: string
	category: string
	price: number 
	imageUrl: string 
	images: string[]
	quantityAvailable: number
	specifications: string
	shippingAndReturn: string
	isBikeSpecific: boolean
}

export type ShopByBikeModelsType = {
	_id: string
	name: string
	brand: string
	description: string
	type: string
}

export type ShopByBikeType = {
	_id: string
	name: string
	description: string
	models: ShopByBikeModelsType[]
}

export type T_PRODUCT_REDUCER = {
	menu: {
		shopByBike: ShopByBikeType[]
	}
}