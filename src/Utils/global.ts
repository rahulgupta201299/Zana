import { generatePath } from "react-router-dom";

export const InrFormatter = {
  format(amount: number): string {
    const formatted = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(amount);

    return formatted.replace(/,/g, ",\u200B");
  },
};

export function encodedGeneratedPath(route: string, obj?: object): string {
  const encodedObj = Object.entries(obj).reduce((acc, [k, v]) => {
    acc[k] = encodeURIComponent(v).toLowerCase();
    return acc;
  }, {});
  return generatePath(route, encodedObj);
}

export function decodeParams<T extends Record<string, string>>(
  obj: Partial<T>,
): Partial<T> {
  if (!obj) return {}

  return Object.entries(obj).reduce(
    (acc, [k, v]) => {
      acc[k] = decodeURIComponent(v).toLowerCase();
      return acc;
    },
    {} as Record<string, string>,
  ) as Partial<T>;
}
