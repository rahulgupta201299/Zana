import React, { useState } from "react";
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
import { ProductCatergoryCountType } from "@/Redux/Product/Types";
import { useSelector } from "react-redux";
import { TAppStore } from "@/Configurations/AppStore";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { productSubCategoryCountServiceName } from "@/Redux/Product/Actions";
import { FilterType } from "./Types";
import withDeviceDetails from "@/Hocs/withDeviceDetails";

type ProductFilterPropsType = {
	subCategoryData: ProductCatergoryCountType[]
	filterData: FilterType
	callbackService: ({ category, subCategory }: { category: string, subCategory: string }, page?: number) => void
	clearFilter: () => void
}

function ProductFilter(props: ProductFilterPropsType) {

	const { subCategoryData, filterData, callbackService, clearFilter } = props;

	const [localFilterData, setLocalFilterData] = useState<FilterType>(filterData)

	const isSubCategoryLoading = useSelector<TAppStore, boolean>((state) =>
		isServiceLoading(state, [productSubCategoryCountServiceName]),
	);

	const { category, subCategory } = localFilterData;

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
					{subCategoryData.map((item) => (
						<Box
							key={item.name}
							onClick={() => setLocalFilterData(prev => ({ ...prev, subCategory: item.name.toLowerCase() }))}
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
						subCategoryData.length === 0 && (
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
						setLocalFilterData(prev => ({ ...prev, subCategory: "" }));
						clearFilter();
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
					disabled={!subCategory || !subCategoryData.length}
					onClick={() => callbackService({ category, subCategory })}
				>
					Apply
				</Button>
			</Box>
		</Box>
	);
}

export default withDeviceDetails(ProductFilter);