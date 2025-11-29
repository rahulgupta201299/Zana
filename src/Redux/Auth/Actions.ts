import { createAction } from "@reduxjs/toolkit";
import { SLICE_NAME } from "./Selectors";

import traceActionsCreator from "@/Redux/traceActionsCreator";

export const signInServiceName = `${SLICE_NAME}/login`;
export const signInTraceActions = traceActionsCreator(signInServiceName);

export const generateOtpName = `${SLICE_NAME}/generateOtp`;
export const generateOtpActions = traceActionsCreator(generateOtpName);

export const verifyOtpName = `${SLICE_NAME}/verifyOtp`;
export const verifyOtpActions = traceActionsCreator(verifyOtpName);

export const getIsdCodeName = `${SLICE_NAME}/getIsdCode`;
export const getIsdCodeActions = traceActionsCreator(getIsdCodeName);

export const addProfileDetailsName = `${SLICE_NAME}/addProfileDetails`;
export const addProfileDetailsActions = traceActionsCreator(addProfileDetailsName);

export const getBikeBrandName = `${SLICE_NAME}/getBikeBrand`;
export const  getBikeBrandActions = traceActionsCreator(getBikeBrandName);

export const getBikeModelName = `${SLICE_NAME}/getBikeModel`;
export const  getBikeModelActions = traceActionsCreator(getBikeModelName);

export const getProfileDetailName = `${SLICE_NAME}/getProfileDetail`;
export const getProfileDetailsActions = traceActionsCreator(getProfileDetailName);

export const updateProfileDetailName = `${SLICE_NAME}/updateProfileDetail`;
export const updateProfileDetailsActions = traceActionsCreator(updateProfileDetailName);

