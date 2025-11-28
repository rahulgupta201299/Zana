import { createSelector } from "@reduxjs/toolkit";

import type { TAppStore } from "@/Configurations/AppStore";

export const SLICE_NAME = "product";

export const shopByBikeSelector = createSelector((state: TAppStore) => state.product.menu.shopByBike, data => data)
export const zProBikeSelector = createSelector((state: TAppStore) => state.product.menu.zProBikes, data => data)
export const productCategorySelector = createSelector((state: TAppStore) => state.product.menu.productCategory, data => data)

