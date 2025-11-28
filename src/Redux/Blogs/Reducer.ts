import { ActionReducerMapBuilder, CreateSliceOptions, PayloadAction, createSlice } from "@reduxjs/toolkit";

import { SLICE_NAME } from "./Selectors";
import { T_BLOG_REDUCER, blogDataType } from "./Types";
import { blogDetailsActions, fetchBlogListActions } from "./Actions";

export const INITIAL_STATE: T_BLOG_REDUCER = {
    blogList: [],
    blogDetail: {
        _id: "",
        title: "",
        description: "",
        content: "",
        imageUrl: "",
        createdAt: "",
        __v: 0
    }
}

const sliceOptions: CreateSliceOptions<T_BLOG_REDUCER> = {
    name: SLICE_NAME,
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<T_BLOG_REDUCER>) => {
      builder.addCase(
        fetchBlogListActions.success,
        (state, action: PayloadAction<blogDataType[]>) => {
            console.log(action)
          state.blogList = action.payload;
        }
      );
      builder.addCase(
        blogDetailsActions.success,
        (state, action: PayloadAction<blogDataType>) => {
          state.blogDetail = action.payload;
        }
      );
    },
  };
  

const slice = createSlice(sliceOptions);

export const { resetLanding } = slice.actions;

export default slice.reducer;