
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BikePlaceholderImage from '@/Assets/Images/BikePlaceholder.svg'
import { ALL_CATEGORY } from "@/Constants/AppConstant";
import { shopByBikeSelector } from "@/Redux/Product/Selectors";
import { ShopByBikeModelsType } from "@/Redux/Product/Types";
import { SUB_ROUTES } from "@/Constants/Routes";
import { replaceSpacesWithHiphen } from "@/Utils/StringUtils";

function Bikes() {
	const shopByBike = useSelector(shopByBikeSelector)

	const location = useLocation()
	const { brand: initialBikeBrand = ALL_CATEGORY } = location.state

	const [selectedBrand, setSelectedBrand] = useState<string>(initialBikeBrand);
	const [allBrandDetails, setAllBrandDetails] = useState<ShopByBikeModelsType[]>([]);
	const [filteredBrandDetails, setFilteredBrandDetails] = useState<ShopByBikeModelsType[]>([]);

	const navigate = useNavigate();

	const categoriesWithCount: { name: string, count: number }[] = useMemo(() => {
		const result = [{ name: ALL_CATEGORY, count: shopByBike.length }]

		shopByBike.forEach(item => {
			result.push({ name: item.name.toLowerCase(), count: item.models.length })
		})

		return result
	}, [shopByBike.length])

	function handleBikeClick(brand: string, model: string, id: string) {
		const bikeBrand = replaceSpacesWithHiphen(brand)
		const bikeModel = replaceSpacesWithHiphen(model)

		navigate(`${SUB_ROUTES.BIKE}/${bikeBrand}/${bikeModel}/${id}`);
	}

	function handleBrandCategoryClick(val: string) {

		if (val === ALL_CATEGORY) setFilteredBrandDetails(allBrandDetails)
		else {
			const data = shopByBike.find(item => item.name.toLowerCase() === val)?.models || []
			setFilteredBrandDetails(data)
		}

		setSelectedBrand(val)
	}

	function pageOps() {
		const data = shopByBike.reduce((acc, curr) => {
			return [...acc, ...curr.models]
		}, [])
		setAllBrandDetails(data)
		setFilteredBrandDetails(data)
	}

	useEffect(() => {
		pageOps()
	}, [])

	return (
		<div className="min-h-screen" style={{ backgroundColor: '#181818' }}>
			<div className="py-8 md:py-16 px-4 md:px-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<div className="mb-8 md:mb-12">
						<h1 className="text-white text-3xl md:text-5xl font-bold mb-4">BIKES</h1>
						<p className="text-white/70 text-sm md:text-base">
							Explore our range of {allBrandDetails.length} bike models from {shopByBike.length} premium brands
						</p>
					</div>

					<div className="mb-8 flex flex-wrap gap-3">
						{categoriesWithCount.map((brand) => {
							const { name, count } = brand
							const brandName = name.toLowerCase()

							return (
								<button
									key={name}
									onClick={() => handleBrandCategoryClick(brandName)}
									className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${selectedBrand === brandName
										? "bg-yellow-400 text-black"
										: "bg-white/10 text-white hover:bg-white/20"
										}`}
								>
									{brandName.toUpperCase()} ({count})
								</button>
							);
						})}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredBrandDetails.map(brand => {

							const { _id, name, description, type, brandName, imageUrl } = brand

							return (
								<div
									key={_id}
									style={{ textTransform: 'capitalize' }}
									onClick={() => handleBikeClick(brandName, name, _id)}
									className="border-2 border-yellow-400 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
								>
									{/* Image Section */}
									<div className="bg-white p-6 md:p-8 h-48 md:h-64 flex items-center justify-center">
										{/* TODO image */}
										<img
											src={BikePlaceholderImage}
											alt={name}
											className="max-h-full max-w-full object-contain"
											onError={(e) => e.currentTarget.src = BikePlaceholderImage}
										/>
									</div>

									{/* Info Section */}
									<div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-4 md:p-6">
										<div className="mb-2">
											<span className="text-xs md:text-sm font-medium opacity-80">
												{brandName.toUpperCase()}
											</span>
										</div>
										<h3 className="text-lg md:text-2xl font-bold mb-2">
											{name}
										</h3>
										<p className="text-xs md:text-sm opacity-75 mb-3">
											{description}
										</p>
										<div className="flex items-center justify-between">
											<span className="text-xs md:text-sm font-medium px-3 py-1 bg-black/10 rounded-full">
												{type}
											</span>
											<span className="text-xs md:text-sm font-bold">
												View Products →
											</span>
										</div>
									</div>
								</div>
							)
						})}
					</div>

					{/* No Results */}
					{filteredBrandDetails.length === 0 && (
						<div className="text-center py-16">
							<p className="text-white/50 text-lg">
								No bikes found for {selectedBrand.toUpperCase()}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Bikes;
