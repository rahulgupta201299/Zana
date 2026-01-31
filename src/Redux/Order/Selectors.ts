import { createSelector } from "@reduxjs/toolkit";

import type { TAppStore } from "@/Configurations/AppStore";

export const SLICE_NAME = "order";

export const newOrderPlacedDetails = createSelector((state: TAppStore) => state.order.newOrderPlaced, data => data)
