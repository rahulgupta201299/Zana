export const NODE_ENV = import.meta.env.VITE_NODE_ENV;
export const APP_TITLE = import.meta.env.VITE_APP_TITLE;
export const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;
export const API_TIME_OUT = Number(import.meta.env.VITE_API_TIME_OUT) || 60000;
export const VITE_ENABLE_TRACKING = import.meta.env.VITE_ENABLE_TRACKING === "true";
