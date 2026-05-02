import React, { useEffect, useRef, useState } from "react";
import {
	Box,
	Typography,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Slider,
	Radio,
	Button,
	Skeleton,
} from "@mui/material";
import { PaginationType, ProductCatalogDetailsType, ProductCatergoryCountType, ShopByProductDetailsType } from "@/Redux/Product/Types";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import ProductSubCategoryCountService from "@/Redux/Product/Services/ProductSubCategoryCountService";
import FilterProductService from "@/Redux/Product/Services/FilterProductService";
import { LIMIT_PER_PAGE } from "./Constant";
import { getLoginDetails } from "@/Redux/Auth/Selectors";

type ProductFilterPropsType = {
	page: number
	category: string
	categoryService: (page: number) => Promise<unknown>
	onChangeFilterProducts: (data: ShopByProductDetailsType[], pagination?: PaginationType) => void
	clearFilter: () => void
}

function ProductFilter(props: ProductFilterPropsType) {

	const { page, category, categoryService, onChangeFilterProducts, clearFilter } = props;

	const loginDetails = useSelector(getLoginDetails);

	const [subCategory, setSubCategory] = useState<string>("");
	const [subCategoryList, setSubCategoryList] = useState<ProductCatergoryCountType[]>([]);

	const dispatch = useDispatch<TAppDispatch>()

	const { phoneNumber = '' } = loginDetails;

	async function handleCategoryChange() {
		setSubCategoryList([])
		setSubCategory("")

		try {
			const response = await dispatch(ProductSubCategoryCountService(category)) as ProductCatergoryCountType[];
			setSubCategoryList(response)
		} catch (error) {
			console.error(error)
		}
	}

	async function handleApplyFilter(page = 1) {
		if (!subCategory) return;

		try {
			onChangeFilterProducts([])

			const { data, pagination } = await dispatch(FilterProductService({
				category, subCategory, queryParams: {
					page,
					limit: LIMIT_PER_PAGE,
					phoneNumber,
				},
			})) as ProductCatalogDetailsType

			onChangeFilterProducts(data, pagination)

		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		handleCategoryChange()
	}, [category])

	useEffect(() => {
		if (subCategory) {
			handleApplyFilter(page)
			return;
		}
		categoryService(page)
	}, [page])

	return (
		<Box
			sx={{
				p: { xs: 2.5, xl: 3 },
				borderRadius: "16px",
				backgroundColor: "#e5e7eb",
				boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
				border: "1px solid #e5e7eb",
			}}
		>
			{/* Title */}
			<Typography
				sx={{
					fontSize: "18px",
					fontWeight: 600,
					mb: 3,
					color: "#111827",
				}}
			>
				Refine Your Ride
			</Typography>

			{/* Availability */}
			{/* 
			<Box sx={{ mb: 3 }}>
				<Typography sx={{ fontWeight: 500, mb: 2, color: "#1f2937" }}>
					Availability
				</Typography>

				<FormGroup>
					{FILTERS.availability.map((item) => (
						<FormControlLabel
							key={item.value}
							control={
								<Checkbox
									checked={filters.availability.includes(item.value)}
									onChange={() =>
										toggleFilter("availability", item.value)
									}
									sx={{
										color: "#9ca3af",
										"&.Mui-checked": {
											color: "#EAB308",
										},
									}}
								/>
							}
							label={
								<Typography sx={{ fontSize: "14px", color: "#374151" }}>
									{item.label}
								</Typography>
							}
							sx={{
								mb: 1,
								cursor: "pointer",
								"&:hover": {
									backgroundColor: "#f9fafb",
									borderRadius: "6px",
								},
							}}
						/>
					))}
				</FormGroup>
			</Box> */}


			{/* Price */}

			{/* <Box sx={{ mb: 3 }}>
				<Typography sx={{ fontWeight: 500, mb: 2, color: "#1f2937" }}>
					Price
				</Typography>

				<Slider
					min={1000}
					max={5000}
					step={100}
					value={filters.price}
					onChange={(_, value) =>
						setFilters({
							...filters,
							price: value as number,
						})
					}
					sx={{
						color: "#FACC15",
					}}
				/>

				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						fontSize: "14px",
						color: "#4b5563",
						mt: 1,
					}}
				>
					<span>₹1000</span>
					<span>₹{filters.price}</span>
				</Box>
			</Box> */}


			{/* Products */}
			<Box>
				<Typography
					sx={{
						fontWeight: 500,
						mb: 2,
						color: "#1f2937",
					}}
				>
					Products
				</Typography>

				<Box>
					{subCategoryList.map((item) => (
						<Box
							key={item.name}
							onClick={() => setSubCategory(item.name.toLowerCase())}
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								mb: 1,
								cursor: "pointer",
								p: 0.5,
								borderRadius: "6px",
							}}
						>
							<Radio
								checked={item.name.toLowerCase() === subCategory}
								sx={{
									color: "#9ca3af",
									"&.Mui-checked": {
										color: "#3b82f6",
									},
								}}
							/>

							<Typography
								sx={{
									fontSize: "14px",
									color: "#374151",
								}}
							>
								{item.name}{' '}({item.count})
							</Typography>
						</Box>
					))}
					{
						subCategoryList.length === 0 && (
							<Box
								sx={{
									color: 'gray',
									mb: '1rem'
								}}
							>
								No Filters Found
							</Box>
						)
					}
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: {
						lg: 'space-between',
						xs: 'flex-end',
					},
					gap: '1rem'
				}}
			>
				<Button
					sx={{
						background: 'none',
						fontWeight: 700,
						"&:hover": {
							opacity: 0.7,
						},
					}}
					onClick={() => {
						setSubCategory("")
						clearFilter()
					}}
				>
					Clear
				</Button>
				<Button
					sx={{
						backgroundColor: "#FACC15",
						color: "#000",
						border: "1px solid #FACC15",
						fontWeight: 800,
						px: 2.5, // 20px
						py: 1,   // 8px
						borderRadius: "8px",
						textTransform: "none",
						transition: "all 0.2s ease",
						"&:hover": {
							opacity: 0.7,
						},
					}}
					disabled={!subCategory || !subCategoryList.length}
					onClick={() => handleApplyFilter()}
				>
					Apply
				</Button>
			</Box>
		</Box>
	);
}

export default withDeviceDetails(ProductFilter);