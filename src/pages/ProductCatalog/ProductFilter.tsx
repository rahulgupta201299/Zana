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
import {
  PaginationType,
  ProductCatalogDetailsType,
  ProductCatergoryCountType,
  ShopByProductDetailsType,
} from "@/Redux/Product/Types";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import ProductSubCategoryCountService from "@/Redux/Product/Services/ProductSubCategoryCountService";
import FilterProductService from "@/Redux/Product/Services/FilterProductService";
import { LIMIT_PER_PAGE } from "./Constant";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import bikeSubCategoryCountServiceAction from "@/Redux/Product/Services/BikeSubCategoryCount";
import BikeProductService from "@/Redux/Product/Services/BikeProductService";

type ProductFilterPropsType = {
  page: number;
  type: string;
  modelId?: string;
  category: string;
  subCategory: string;
  setSubCategory: (val: string) => void;
  onChangeFilterProducts: (
    data: ShopByProductDetailsType[],
    pagination?: PaginationType,
  ) => void;
  clearFilter: () => void;
};

function ProductFilter(props: ProductFilterPropsType) {
  const {
    page,
    category,
    subCategory,
    setSubCategory,
    onChangeFilterProducts,
    clearFilter,
    type,
    modelId,
  } = props;

  const loginDetails = useSelector(getLoginDetails);

  const [subCategoryList, setSubCategoryList] = useState<
    ProductCatergoryCountType[]
  >([]);

  const dispatch = useDispatch<TAppDispatch>();

  const { phoneNumber = "" } = loginDetails;

  async function handleCategoryChange() {
    console.log("Category changed to:", category);
    setSubCategoryList([]);
    setSubCategory("");
    try {
      const response =
        type === "bike"
          ? ((await dispatch(
              bikeSubCategoryCountServiceAction({ category, modelId }),
            )) as ProductCatergoryCountType[])
          : ((await dispatch(
              ProductSubCategoryCountService(category),
            )) as ProductCatergoryCountType[]);
      setSubCategoryList(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleApplyFilter(selectedSubCategory: string, page = 1) {
  if (!selectedSubCategory) return;

  try {
    onChangeFilterProducts([]);

    if (type === "bike") {
      const response = (await dispatch(
        BikeProductService({ modelId, category, subCategory: selectedSubCategory }),
      )) as ShopByProductDetailsType[];
      onChangeFilterProducts(response);
    } else {
      const { data, pagination } = (await dispatch(
        FilterProductService({
          category,
          subCategory: selectedSubCategory,
          queryParams: { page, limit: LIMIT_PER_PAGE, phoneNumber },
        }),
      )) as ProductCatalogDetailsType;
      onChangeFilterProducts(data, pagination);
    }
  } catch (error) {
    console.error(error);
  }
}

  useEffect(() => {
    handleCategoryChange();
  }, [category]);

  useEffect(() => {
    handleApplyFilter(subCategory, page);
  }, [page]);

  return (
    <Box
      sx={{
        p: { xs: 2, xl: 2.5 },
        borderRadius: "16px",
        backgroundColor: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 700,
          mb: 2,
          color: "#facc15",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        Refine Your Ride
      </Typography>

      {/* Subcategory List */}
      <Box
        sx={{
          mb: 2,
          maxHeight: "350px", 
          overflowY: "auto", 
          pr: 0.5,
        
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(255,255,255,0.15)",
            borderRadius: "4px",
          },
        }}
      >
        {subCategoryList.map((item) => {
          const isSelected = item.name.toLowerCase() === subCategory;
          return (
            <Box
              key={item.name}
              onClick={() => {
                const val = item.name.toLowerCase();
                setSubCategory(val);
                handleApplyFilter(val); 
              }}
              sx={{
                display: "flex",
                alignItems: "flex-start", 
                justifyContent: "space-between",
                gap: 1,
                mb: 0.25, 
                cursor: "pointer",
                px: 1,
                py: 0.6, 
                borderRadius: "8px",
                transition: "all 0.2s",
                backgroundColor: isSelected
                  ? "rgba(250,204,21,0.15)"
                  : "transparent",
                border: isSelected
                  ? "1px solid rgba(250,204,21,0.4)"
                  : "1px solid transparent",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.05)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {/* Custom radio dot — aligned to top of text */}
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: isSelected
                      ? "#facc15"
                      : "rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: "1px", 
                  }}
                >
                  {isSelected && (
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#facc15",
                      }}
                    />
                  )}
                </Box>

                {/* Name — wraps naturally, no truncation */}
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: isSelected ? "#facc15" : "rgba(255,255,255,0.8)",
                    fontWeight: isSelected ? 600 : 400,
                    textTransform: "capitalize",
                    lineHeight: 1.4,
                    textAlign: "left",
                    wordBreak: "break-word",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>

              {/* Count — stays on right, aligned to top */}
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 500,
                  flexShrink: 0,
                  mt: "2px",
                  lineHeight: 1.4,
                }}
              >
                {item.count}
              </Typography>
            </Box>
          );
        })}

        {subCategoryList.length === 0 && (
          <Typography
            sx={{
              color: "rgba(255,255,255,0.3)",
              fontSize: "14px",
              py: 2,
              textAlign: "center",
            }}
          >
            No Filters Found
          </Typography>
        )}
      </Box>

      {/* Divider */}
      <Box sx={{ borderTop: "1px solid rgba(255,255,255,0.08)", mb: 1.5 }} />

      {/* Actions */}
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1.5 }}>
        <Button
          fullWidth
          disabled={!subCategory || !subCategoryList.length}
          onClick={() => {
            
            clearFilter();
          }}      
          sx={{
            backgroundColor: "#facc15",
            color: "#000",
            borderRadius: "8px",
            fontWeight: 800,
            textTransform: "none",
            py: 0.8,
            transition: "all 0.2s ease",
            "&:hover": { backgroundColor: "#eab308" },
            "&.Mui-disabled": {
              backgroundColor: "rgba(250,204,21,0.2)",
              color: "rgba(0,0,0,0.3)",
            },
          }}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
}

export default withDeviceDetails(ProductFilter);
