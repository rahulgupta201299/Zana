import { generatePath } from "react-router-dom";
import { replaceSpecialCharactersWithHyphen } from "./StringUtils";
import { UtmType } from "@/Redux/Cart/Types";

export const InrFormatter = {
  format(amount: number): string {
    const formatted = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(amount);

    return formatted.replace(/,/g, ",\u200B");
  },
};

// Custom encoding function that replaces spaces and special characters with hyphens for SEO-friendly URLs
export function encodedGeneratedPath(route: string, obj?: object): string {
  const encodedObj = Object.entries(obj).reduce((acc, [k, v]) => {
    // acc[k] = encodeURIComponent(v).toLowerCase();
    acc[k] = replaceSpecialCharactersWithHyphen(String(v));
    return acc;
  }, {});
  return generatePath(route, encodedObj);
}

// export function decodeParams<T extends Record<string, string>>(
//   obj: Partial<T>,
// ): Partial<T> {
//   if (!obj) return {}

//   return Object.entries(obj).reduce(
//     (acc, [k, v]) => {
//       acc[k] = decodeURIComponent(v).toLowerCase();
//       return acc;
//     },
//     {} as Record<string, string>,
//   ) as Partial<T>;
// }

export const getTotalQuantity = <T extends { quantity: number }>(
  items: T[],
): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

export function statusColor(status: string) {
  if (!status) return "#A7F3D0";
  switch (status.toLowerCase()) {
    case "confirmed":
    case "success":
    case "paid":
      return "#22C55E";
    case "partial_paid":
      return "#FB923C";
    case "pending":
    case "processing":
      return "#FACC15";
    case "failed":
    case "cancelled":
      return "#EF4444";
    default:
      return "#A7F3D0";
  }
}

export function getPhoneNumber(phoneNumber: string = ""): string {
  return phoneNumber.split("-")?.[1] || phoneNumber;
}

export const capitalise = (str: string) =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

export function getUtmParamsFromUrl(): UtmType | null {
  const searchParams = new URLSearchParams(window.location.search);
  const entries = Object.fromEntries(searchParams.entries());
  
  const validKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
  
  const result: UtmType = {};
  let hasUtm = false;

  validKeys.forEach(key => {
    if (entries[key]) {
      result[key] = entries[key];
      hasUtm = true;
    }
  });

  return hasUtm ? result : null;
}

