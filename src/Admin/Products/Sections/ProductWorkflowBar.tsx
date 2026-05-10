import React from "react";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useProductCms } from "../ProductCmsContext";
import { initialProductField, UPDATE_ACTIONS } from "../Constant";
import {
  createAdminProduct,
  getAdminProduct,
  getAdminProducts,
  searchAdminProducts,
  type ProductOption,
  updateAdminProduct,
} from "../ProductApi";
import type { ProductFieldType } from "../Types";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ProductWorkflowBar({
  showPreview,
}: {
  showPreview: () => void;
}) {
  const { dispatchAction, errors, isDirty, product } = useProductCms();
  const [selectedProduct, setSelectedProduct] =
    React.useState<ProductOption | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [productOptions, setProductOptions] = React.useState<ProductOption[]>(
    [],
  );
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = React.useState(false);
  const [isLoadingProduct, setIsLoadingProduct] = React.useState(false);

  React.useEffect(() => {
    let isCurrent = true;

    setIsLoadingProducts(true);
    getAdminProducts()
      .then((products) => {
        if (isCurrent) setProductOptions(products);
      })
      .catch((error: any) => {
        if (isCurrent) {
          setSubmitStatus({
            type: "error",
            message:
              error?.response?.data?.message ||
              error?.message ||
              "Unable to load products.",
          });
        }
      })
      .finally(() => {
        if (isCurrent) setIsLoadingProducts(false);
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  React.useEffect(() => {
    let isCurrent = true;
    const timeoutId = window.setTimeout(() => {
      const normalizedQuery = searchQuery.trim();
      if (!normalizedQuery) return;

      setIsLoadingProducts(true);
      searchAdminProducts(normalizedQuery)
        .then((products) => {
          if (isCurrent) {
            setProductOptions((currentOptions) =>
              mergeProductOptions(products, selectedProduct, currentOptions),
            );
            setSubmitStatus(null);
          }
        })
        .catch((error: any) => {
          if (isCurrent) {
            setSubmitStatus({
              type: "error",
              message:
                error?.response?.data?.message ||
                error?.message ||
                "Unable to search products.",
            });
          }
        })
        .finally(() => {
          if (isCurrent) setIsLoadingProducts(false);
        });
    }, 350);

    return () => {
      isCurrent = false;
      window.clearTimeout(timeoutId);
    };
  }, [searchQuery, selectedProduct]);

  const pillSx = {
    px: 1.25,
    py: 0.5,
    border: "1px solid #dfe5eb",
    borderRadius: 999,
    color: "#4b5560",
    fontSize: "0.78rem",
    fontWeight: 750,
    bgcolor: "#f8fafb",
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedProduct?._id) return;

    setSubmitStatus(null);
    setIsLoadingProduct(true);

    try {
      const selectedOption =
        productOptions.find((item) => item._id === selectedProduct._id) || null;
      const loadedProduct = await getAdminProduct(selectedProduct._id).catch(
        () => {
          if (!selectedOption)
            throw new Error("Unable to load selected product.");
          return selectedOption;
        },
      );

      dispatchAction(UPDATE_ACTIONS.LOAD_PRODUCT, {
        product: normalizeProductForForm(loadedProduct),
      });
      setSubmitStatus({
        type: "success",
        message: "Product loaded successfully.",
      });
    } catch (error: any) {
      setSubmitStatus({
        type: "error",
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Unable to load selected product.",
      });
    } finally {
      setIsLoadingProduct(false);
    }
  };

  function startNewProduct() {
    setSelectedProduct(null);
    setSearchQuery("");
    setSubmitStatus(null);
    dispatchAction(UPDATE_ACTIONS.START_NEW_PRODUCT);
  }

  function resetProduct() {
    setSelectedProduct(null);
    setSearchQuery("");
    setSubmitStatus(null);
    dispatchAction(UPDATE_ACTIONS.RESET_PRODUCT);
  }

  async function handleSubmit() {
    const validationErrors = validateProduct(product);
    dispatchAction(UPDATE_ACTIONS.SET_ERRORS, { errors: validationErrors });
    setSubmitStatus(null);

    if (Object.keys(validationErrors).length) {
      setSubmitStatus({
        type: "error",
        message: "Fix validation errors before publishing this product.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const isEditing = Boolean(product._id);
      const response = isEditing
        ? await updateAdminProduct(product._id, product)
        : await createAdminProduct(product);
      const nextProduct = { ...initialProductField, ...response.data };

      dispatchAction(UPDATE_ACTIONS.LOAD_PRODUCT, {
        product: nextProduct,
      });
      setSelectedProduct({
        _id: nextProduct._id,
        productCode: nextProduct.productCode,
        name: nextProduct.name,
      });
      setProductOptions((options) =>
        mergeProductOptions(
          [
            {
              _id: nextProduct._id,
              productCode: nextProduct.productCode,
              name: nextProduct.name,
            },
          ],
          null,
          options,
        ),
      );
      setSubmitStatus({
        type: "success",
        message: isEditing
          ? "Product updated successfully."
          : "Product created successfully.",
      });
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to save product. Please try again.";
      setSubmitStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  }

  const errorCount = Object.keys(errors).length;

  return (
    <Paper
      variant="outlined"
      sx={{
        borderColor: "#d8dde3",
        borderRadius: 2,
        boxShadow: "0 18px 50px rgba(24, 31, 38, 0.08)",
        p: 2.25,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", xl: "1fr auto" },
          gap: 2,
          alignItems: "start",
        }}
      >
        <Box>
          <Typography
            sx={{
              mb: 0.75,
              color: "#8a4b24",
              fontSize: "0.78rem",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            Product CMS
          </Typography>
          <Typography
            variant="h1"
            sx={{ fontSize: "1.45rem", fontWeight: 850 }}
          >
            Create, edit, preview, save, and publish
          </Typography>
        </Box>
        <Box
        sx={{
          display: "flex",
          width: "100%",     
          justifyContent: "space-between",
        }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: { xs: "flex-start", xl: "flex-end" },
            }}
          >
            <Button variant="outlined" type="button" onClick={startNewProduct}>
              New product
            </Button>
            <Button variant="outlined" type="button" onClick={resetProduct}>
              Reset edits
            </Button>
            <Button
              variant="contained"
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Publishing..." : "Publish"}
            </Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end",  }}>
            <Button
              variant="outlined"
              startIcon={<VisibilityIcon />}
              onClick={showPreview}
            >
              Preview
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(220px, 1fr) auto" },
          gap: 1.5,
          mt: 2,
        }}
      >
        <Autocomplete
          options={productOptions}
          value={selectedProduct}
          inputValue={searchQuery}
          loading={isLoadingProducts}
          isOptionEqualToValue={(option, value) => option._id === value._id}
          getOptionLabel={getProductOptionLabel}
          onChange={(_, value) => {
            setSelectedProduct(value);
            setSearchQuery(value ? getProductOptionLabel(value) : "");
          }}
          onInputChange={(_, value, reason) => {
            setSearchQuery(value);
            if (reason === "clear") setSelectedProduct(null);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              label="Search product code"
              helperText={
                isLoadingProducts
                  ? "Searching product codes..."
                  : "Type a code or product name, then load it to edit."
              }
            />
          )}
        />
        <Button
          sx={{ height: 40 }}
          variant="outlined"
          type="submit"
          disabled={!selectedProduct?._id || isLoadingProduct}
        >
          {isLoadingProduct ? "Loading..." : "Load product"}
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1.5 }}>
        <Typography sx={pillSx}>
          Code: {product.productCode || "New product"}
        </Typography>
        <Typography sx={pillSx}>
          Status: {product.isActive ? "Active" : "Draft"}
        </Typography>
        <Typography sx={pillSx}>
          {isDirty ? "Unsaved changes" : "Saved"}
        </Typography>
        <Typography sx={pillSx}>
          {product._id ? "Editing existing" : "Creating new"}
        </Typography>
      </Box>

      {errorCount ? (
        <Alert severity="warning" sx={{ mt: 2 }}>
          Fix validation errors before saving or publishing.
        </Alert>
      ) : null}

      {submitStatus ? (
        <Alert severity={submitStatus.type} sx={{ mt: 2 }}>
          {submitStatus.message}
        </Alert>
      ) : null}
    </Paper>
  );
}

function validateProduct(product: ProductFieldType) {
  const errors: Record<string, string> = {};

  if (!product.productCode.trim())
    errors.productCode = "Product code is required.";
  if (product.isBikeSpecific && !product.brand) {
    errors.brand = "Brand is required for bike-specific products.";
  }
  if (product.isBikeSpecific && !product.model) {
    errors.model = "Model is required for bike-specific products.";
  }
  if (!product.name.trim()) errors.name = "Product name is required.";
  if (!product.shortDescription.trim()) {
    errors.shortDescription = "Short description is required.";
  }
  if (!product.longDescription.trim()) {
    errors.longDescription = "Long description is required.";
  }
  if (!product.category) errors.category = "Category is required.";
  if (!product.subCategory) errors.subCategory = "Sub-category is required.";
  if (!product.price || product.price <= 0)
    errors.price = "Price must be greater than 0.";
  if (!product.imageUrl) errors.imageUrl = "Main image is required.";
  if (product.quantityAvailable < 0) {
    errors.quantityAvailable = "Quantity cannot be negative.";
  }
  if (!product.specifications.trim())
    errors.specifications = "Specifications are required.";
  if (!product.shippingAndReturn.trim()) {
    errors.shippingAndReturn = "Shipping and return details are required.";
  }
  if (product.priority < 0) errors.priority = "Priority cannot be negative.";

  return errors;
}

function normalizeProductForForm(product: ProductOption): ProductFieldType {
  const mergedProduct = { ...initialProductField, ...product };

  return {
    ...mergedProduct,
    _id: product._id || "",
    brand:
      typeof product.brand === "string"
        ? product.brand
        : product.brand?._id || "",
    model:
      typeof product.model === "string"
        ? product.model
        : product.model?._id || "",
    name: mergedProduct.name || "",
    shortDescription: mergedProduct.shortDescription || "",
    longDescription: mergedProduct.longDescription || "",
    category: mergedProduct.category || "",
    categoryIcon: mergedProduct.categoryIcon || "",
    currencySymbol: mergedProduct.currencySymbol || "₹",
    currency: mergedProduct.currency || "INR",
    imageUrl: mergedProduct.imageUrl || "",
    images: Array.isArray(product.images) ? product.images : [],
    specifications: mergedProduct.specifications || "",
    shippingAndReturn: mergedProduct.shippingAndReturn || "",
    productCode: mergedProduct.productCode || "",
    subCategory: mergedProduct.subCategory || "",
    price: Number(product.price) || 0,
    originalPrice: Number(product.originalPrice) || 0,
    quantityAvailable: Number(product.quantityAvailable) || 0,
    priority: Number(product.priority) || 0,
    isBikeSpecific: Boolean(mergedProduct.isBikeSpecific),
    isNewArrival: Boolean(mergedProduct.isNewArrival),
    isGarageFavorite: Boolean(mergedProduct.isGarageFavorite),
    isWishlist: Boolean(mergedProduct.isWishlist),
    isActive: Boolean(mergedProduct.isActive),
    isComingSoon: Boolean(mergedProduct.isComingSoon),
  };
}

function getProductOptionLabel(option: ProductOption) {
  const code = option.productCode || "No code";
  return `${code} - ${option.name}`;
}

function mergeProductOptions(
  products: ProductOption[],
  selectedProduct: ProductOption | null,
  currentOptions: ProductOption[] = [],
) {
  const optionMap = new Map<string, ProductOption>();

  [
    ...currentOptions,
    ...products,
    ...(selectedProduct ? [selectedProduct] : []),
  ].forEach((option) => {
    if (option?._id) optionMap.set(option._id, option);
  });

  return Array.from(optionMap.values());
}
