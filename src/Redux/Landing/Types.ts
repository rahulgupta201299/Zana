export type ShopByBikeType = {
	name: string
	_id: string
	models: Array<Omit<ShopByBikeType, "models">>
}

export type T_LANDING_REDUCER = {
	menu: {
		shopByBike: ShopByBikeType[]
	}
}