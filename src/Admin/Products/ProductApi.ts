import { API_METHOD_ENUM } from "@/Configurations/Network/Constant";
import Network from "@/Configurations/Network";
import AppStore from "@/Configurations/AppStore";
import type { ProductFieldType } from "./Types";

const network = new Network();

export type BrandOption = {
  _id: string;
  name: string;
  description?: string;
  isActive?: boolean;
};

export type ModelOption = {
  _id: string;
  name: string;
  type?: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  isActive?: boolean;
};

export type ProductOption = Partial<Omit<ProductFieldType, "brand" | "model">> & {
  _id: string;
  name: string;
  productCode?: string;
  brand?: string | BrandOption;
  model?: string | ModelOption;
};

export type CategoryCountOption = {
  count: number;
  name: string;
  icon?: string | null;
};

export type TypeOfCategory = "Bike Specific" | "Universal";

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export async function getAdminBrands(): Promise<BrandOption[]> {
  const response: ApiResponse<BrandOption[]> = await network.request({
    url: "/api/v1/brand",
    method: API_METHOD_ENUM.GET,
  });

  assertSuccessfulResponse(response);
  return Array.isArray(response?.data) ? response.data : [];
}

export async function getAdminModelsByBrand(
  brandId: string,
): Promise<ModelOption[]> {
  if (!brandId) return [];

  const response: ApiResponse<ModelOption[]> = await network.request({
    url: `/api/v1/model/brand/${brandId}`,
    method: API_METHOD_ENUM.GET,
    params: { all: true },
  });

  assertSuccessfulResponse(response);
  return Array.isArray(response?.data) ? response.data : [];
}

export async function getAdminProducts(): Promise<ProductOption[]> {
  const response = await network.request({
    url: "/api/v1/product/all",
    method: API_METHOD_ENUM.GET,
    params: { limit: 1000 },
  });

  assertSuccessfulResponse(response);

  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.data)) return response.data.data;
  return [];
}

export async function searchAdminProducts(query = ""): Promise<ProductOption[]> {
  const state = AppStore.getState();
  const currency = state.landing.selectedCurrency;
  const response = await network.request({
    url: "/api/v1/product/search",
    method: API_METHOD_ENUM.GET,
    params: {
      query: encodeURIComponent(query),
      currency,
    },
  });

  assertSuccessfulResponse(response);

  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.data)) return response.data.data;
  return [];
}

export async function getAdminProduct(productId: string): Promise<ProductOption> {
  const response = await network.request({
    url: `/api/v1/product/${productId}`,
    method: API_METHOD_ENUM.GET,
  });

  assertSuccessfulResponse(response);
  return response?.data || response;
}

export async function getAdminCategories(
  typeOfCategory: TypeOfCategory,
): Promise<CategoryCountOption[]> {
  const response: ApiResponse<string[]> = await network.request({
    url: "api/v1/category/list",
    method: API_METHOD_ENUM.GET,
    params: { typeOfCategory },
  });

  assertSuccessfulResponse(response);
  return mapNamesToOptions(response?.data);
}

export async function getAdminSubCategories({
  category,
  typeOfCategory,
}: {
  category: string;
  typeOfCategory: TypeOfCategory;
}): Promise<CategoryCountOption[]> {
  if (!category) return [];

  const response: ApiResponse<string[]> = await network.request({
    url: "api/v1/category/subcategories",
    method: API_METHOD_ENUM.GET,
    params: { typeOfCategory, category },
  });

  assertSuccessfulResponse(response);
  return mapNamesToOptions(response?.data);
}

function mapNamesToOptions(names?: string[]): CategoryCountOption[] {
  return Array.isArray(names)
    ? names.map((name) => ({ name, count: 0 }))
    : [];
}

export async function createAdminProduct(
  product: ProductFieldType,
): Promise<ApiResponse<ProductFieldType>> {
  const formData = buildProductFormData(product);

  const response: ApiResponse<ProductFieldType> = await network.request({
    url: "/api/v1/product",
    method: API_METHOD_ENUM.POST,
    data: formData,
  });

  assertSuccessfulResponse(response);
  return response;
}

export async function updateAdminProduct(
  productId: string,
  product: ProductFieldType,
): Promise<ApiResponse<ProductFieldType>> {
  const formData = buildProductFormData(product, { onlyNewImages: true });

  const response: ApiResponse<ProductFieldType> = await network.request({
    url: `/api/v1/product/${productId}`,
    method: API_METHOD_ENUM.POST,
    data: formData,
  });

  assertSuccessfulResponse(response);
  return response;
}

function assertSuccessfulResponse(response: ApiResponse<unknown>) {
  if (response?.success === false) {
    throw new Error(response.message || "API request failed.");
  }
}

function appendValue(
  formData: FormData,
  field: string,
  value: string | number | boolean,
) {
  formData.append(field, String(value));
}

function buildProductFormData(
  product: ProductFieldType,
  options: { onlyNewImages?: boolean } = {},
) {
  const formData = new FormData();
   if (product.isBikeSpecific) {
    appendValue(formData, "brand", product.brand);
    appendValue(formData, "model", product.model);
  }
  appendValue(formData, "isBikeSpecific", product.isBikeSpecific);
  appendValue(formData, "productCode", product.productCode);
  appendValue(formData, "isNewArrival", product.isNewArrival);
  appendValue(formData, "isGarageFavorite", product.isGarageFavorite);
  appendValue(formData, "name", product.name);
  appendValue(formData, "shortDescription", product.shortDescription);
  appendValue(formData, "longDescription", product.longDescription);
  appendValue(formData, "category", product.category);
  appendValue(formData, "subCategory", product.subCategory);
  appendValue(formData, "price", product.price);
  appendImage(formData, "imageUrl", product.imageUrl, "main-product-image", {
    onlyNewImages: options.onlyNewImages,
  });
  product.images.forEach((image, index) => {
    appendImage(formData, "images", image, `product-gallery-${index + 1}`, {
      onlyNewImages: options.onlyNewImages,
    });
  });
  appendValue(formData, "quantityAvailable", product.quantityAvailable);
  appendValue(formData, "specifications", product.specifications);
  appendValue(formData, "shippingAndReturn", product.shippingAndReturn);
  appendValue(formData, "isComingSoon", product.isComingSoon);
  appendValue(formData, "isActive", product.isActive);
  appendValue(formData, "priority", product.priority);

  return formData;
}

function appendImage(
  formData: FormData,
  field: string,
  value: string,
  name: string,
  options: { onlyNewImages?: boolean } = {},
) {
  if (!value) return;

  if (value.startsWith("data:")) {
    const file = dataUrlToFile(value, name);
    formData.append(field, file);
    return;
  }

  if (options.onlyNewImages) return;

  formData.append(field, value);
}

function dataUrlToFile(dataUrl: string, fallbackName: string): File {
  const [header, base64Data = ""] = dataUrl.split(",");
  const mimeType = header.match(/data:(.*?);/)?.[1] || "image/webp";
  const extension = mimeType.split("/")[1] || "webp";
  const binary = window.atob(base64Data);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new File([bytes], `${fallbackName}.${extension}`, { type: mimeType });
}
