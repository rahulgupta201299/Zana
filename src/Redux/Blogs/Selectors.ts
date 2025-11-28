import { createSelector } from "@reduxjs/toolkit";

import type { TAppStore } from "@/Configurations/AppStore";

export const SLICE_NAME = "blogs";

export const getListOfBlogs = createSelector(
    (state: TAppStore) => state[SLICE_NAME].blogList,
    (blogList) => blogList
  );

  export const getBlogDetail = createSelector(
    (state: TAppStore) => state[SLICE_NAME].blogDetail,
    (blogDetail) => blogDetail
  );

  export const getTopFourBlogs = createSelector(
    [getListOfBlogs],
    (blogs) => blogs.slice(0, 4)
  );

  