import React, { createContext, type ReactNode, useContext, useReducer } from "react";
import { CmsSectionId, initialProductField, newProductData, UPDATE_ACTIONS } from "./Constant";
import { ProductFieldType } from "./Types";

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

const ProductCmsContext = createContext<ProductCmsState | null>(null);

const initialState: ProductCmsState = {
  product: newProductData,
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

  function dispatchAction(type: string, payload?: any) {
    dispatch({ type, payload });
  }

  return (
    <ProductCmsContext.Provider value={{ ...state, dispatchAction }}>
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
