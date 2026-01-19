import { createSelector } from "@reduxjs/toolkit";

import type { TAppStore } from "@/Configurations/AppStore";

export const SLICE_NAME = "cart";

export const openCartSelector = createSelector((state: TAppStore) => state.cart.isOpenCart, data => data)

export const cartDetailSelector = createSelector((state: TAppStore) => state.cart.cartDetail, data => data)
