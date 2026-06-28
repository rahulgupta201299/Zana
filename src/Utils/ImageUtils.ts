const DEFAULT_PRODUCT_WIDTHS = [320, 480, 640, 768];

function getOptimizedImageUrl(src: string, width: number): string {
  if (!src || src.startsWith("data:") || src.startsWith("blob:")) return src;

  try {
    const url = new URL(src, window.location.origin);

    url.searchParams.set("width", String(width));
    url.searchParams.set("quality", "75");
    url.searchParams.set("format", "webp");

    return url.toString();
  } catch {
    return src;
  }
}

export function getProductImageProps(
  src: string,
  widths: number[] = DEFAULT_PRODUCT_WIDTHS,
) {
  if (!src) {
    return {
      src: "",
      srcSet: undefined,
    };
  }

  const uniqueWidths = Array.from(new Set(widths)).sort((a, b) => a - b);

  return {
    src: getOptimizedImageUrl(src, uniqueWidths[0] ?? 320),
    srcSet: uniqueWidths
      .map((width) => `${getOptimizedImageUrl(src, width)} ${width}w`)
      .join(", "),
  };
}
