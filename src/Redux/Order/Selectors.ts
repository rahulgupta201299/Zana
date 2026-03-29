import { createSelector } from "@reduxjs/toolkit";

import type { TAppStore } from "@/Configurations/AppStore";

export const SLICE_NAME = "order";

export const newOrderPlacedDetails = createSelector((state: TAppStore) => state.order.newOrderPlaced, data => data)


export const orderDetail = createSelector((state: TAppStore) => state.order.orderDetail, data => data)

export const orderList = createSelector((state: TAppStore) => state.order.orderList, data => data)
