import React, { createContext, type ReactNode, useContext, useReducer } from "react";
import { CmsSectionId, initialProductField, UPDATE_ACTIONS } from "./Constant";
import { ProductFieldType } from "./Types";
import {
  getAdminCategories,
  getAdminSubCategories,
  type CategoryCountOption,
  type TypeOfCategory,
} from "./ProductApi";

type ProductCmsAction = {
  type: string;
  payload?: any;
};

type ProductCmsState = {
  product: ProductFieldType;
  dispatchAction: (type: string, payload?: any) => void;
  activeSection: CmsSectionId;
  errors: Record<string, string>;
  isDirty: boolean;
};

type ProductCmsContextValue = ProductCmsState & {
  categoryOptions: CategoryCountOption[];
  subCategoryOptions: CategoryCountOption[];
  categoriesLoading: boolean;
  subCategoriesLoading: boolean;
  categoryLookupError: string;
  typeOfCategory: TypeOfCategory;
};

const ProductCmsContext = createContext<ProductCmsContextValue | null>(null);

const initialState: ProductCmsState = {
  product: initialProductField,
  dispatchAction: () => { },
  activeSection: CmsSectionId.Core,
  errors: {},
  isDirty: false,
};

function cloneProduct(product: ProductFieldType): ProductFieldType {
  return structuredClone(product);
}

function productReducer(
  state: ProductCmsState,
  action: ProductCmsAction,
): ProductCmsState {
  switch (action.type) {
    case UPDATE_ACTIONS.START_NEW_PRODUCT:
      return {
        ...state,
        product: cloneProduct(initialProductField),
        activeSection: CmsSectionId.Core,
        errors: {},
        isDirty: false,
      };

    case UPDATE_ACTIONS.LOAD_PRODUCT:
      return {
        ...state,
        product: cloneProduct(action.payload.product),
        activeSection: CmsSectionId.Core,
        errors: {},
        isDirty: false,
      };

    case UPDATE_ACTIONS.UPDATE_FIELD: {
      const { field, value } = action.payload;

      console.log("Updating field:", field, "with value:", value);

      return {
        ...state,
        product: {
          ...state.product,
          [field]: value,
        },
        errors: {},
        isDirty: true,
      };
    }

    case UPDATE_ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      };

    case UPDATE_ACTIONS.RESET_PRODUCT:
      return {
        ...state,
        product: cloneProduct(initialProductField),
        activeSection: CmsSectionId.Core,
        errors: {},
        isDirty: false,
      };

    case UPDATE_ACTIONS.SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: action.payload.section,
      };

    default:
      return state;
  }
}

export function ProductCmsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [categoryOptions, setCategoryOptions] = React.useState<CategoryCountOption[]>([]);
  const [subCategoryOptions, setSubCategoryOptions] = React.useState<
    CategoryCountOption[]
  >([]);
  const [categoriesLoading, setCategoriesLoading] = React.useState(false);
  const [subCategoriesLoading, setSubCategoriesLoading] = React.useState(false);
  const [categoryLookupError, setCategoryLookupError] = React.useState("");
  const typeOfCategory: TypeOfCategory = state.product.isBikeSpecific
    ? "Bike Specific"
    : "Universal";

  function dispatchAction(type: string, payload?: any) {
    dispatch({ type, payload });
  }

  React.useEffect(() => {
    let isCurrent = true;

    setCategoriesLoading(true);
    setCategoryLookupError("");
    getAdminCategories(typeOfCategory)
      .then((categories) => {
        if (isCurrent) setCategoryOptions(categories);
      })
      .catch(() => {
        if (isCurrent) setCategoryLookupError("Unable to load categories.");
      })
      .finally(() => {
        if (isCurrent) setCategoriesLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [typeOfCategory]);

  React.useEffect(() => {
    let isCurrent = true;

    setSubCategoryOptions([]);
    setCategoryLookupError("");
    if (!state.product.category) {
      setSubCategoriesLoading(false);
      return () => {
        isCurrent = false;
      };
    }

    setSubCategoriesLoading(true);
    getAdminSubCategories({
      category: state.product.category,
      typeOfCategory,
    })
      .then((subCategories) => {
        if (isCurrent) setSubCategoryOptions(subCategories);
      })
      .catch(() => {
        if (isCurrent) setCategoryLookupError("Unable to load sub-categories.");
      })
      .finally(() => {
        if (isCurrent) setSubCategoriesLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [state.product.category, typeOfCategory]);

  return (
    <ProductCmsContext.Provider
      value={{
        ...state,
        dispatchAction,
        categoryOptions,
        subCategoryOptions,
        categoriesLoading,
        subCategoriesLoading,
        categoryLookupError,
        typeOfCategory,
      }}
    >
      {children}
    </ProductCmsContext.Provider>
  );
}

export function useProductCms() {
  const context = useContext(ProductCmsContext);

  if (!context) {
    throw new Error("useProductCms must be used within ProductCmsProvider");
  }

  return context;
}
