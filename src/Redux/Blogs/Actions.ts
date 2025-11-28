import { createAction } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./Selectors";

import traceActionsCreator from "@/Redux/traceActionsCreator";

export const fetchBlogListName = `${SLICE_NAME}/blogList`
export const fetchBlogListActions = traceActionsCreator(fetchBlogListName)

export const blogDetailsName = `${SLICE_NAME}/blogDetails`
export const blogDetailsActions = traceActionsCreator(blogDetailsName)