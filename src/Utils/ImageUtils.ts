const DEFAULT_PRODUCT_WIDTHS = [320, 480, 640, 768];

export const IMAGE_WIDTH_PRESETS = {
  thumbnail: [120, 240],
  productCard: [320, 480, 640],
  productHero: [480, 640, 768, 960],
  bikeHero: [328, 480, 640, 800],
  suggestedProduct: [256, 320, 480],
} as const;

export function getOptimizedImageUrl(src: string, width: number): string {
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

function pickSrcWidth(widths: number[], preferredWidth?: number): number {
  if (!widths.length) return 320;

  if (preferredWidth === undefined) return widths[0];

  return widths.reduce((closest, width) =>
    Math.abs(width - preferredWidth) < Math.abs(closest - preferredWidth)
      ? width
      : closest,
  );
}

export function getProductImageProps(
  src: string,
  widths: number[] = DEFAULT_PRODUCT_WIDTHS,
  preferredWidth?: number,
) {
  if (!src) {
    return {
      src: "",
      srcSet: undefined as string | undefined,
    };
  }

  const uniqueWidths = Array.from(new Set(widths)).sort((a, b) => a - b);
  const srcWidth = pickSrcWidth(uniqueWidths, preferredWidth);

  return {
    src: getOptimizedImageUrl(src, srcWidth),
    srcSet: uniqueWidths
      .map((width) => `${getOptimizedImageUrl(src, width)} ${width}w`)
      .join(", "),
  };
}

export function getThumbnailImageProps(src: string) {
  return getProductImageProps(src, [...IMAGE_WIDTH_PRESETS.thumbnail], 120);
}

export function getHeroImageProps(src: string) {
  return getProductImageProps(src, [...IMAGE_WIDTH_PRESETS.productHero], 640);
}

export function getSuggestedProductImageProps(src: string) {
  return getProductImageProps(
    src,
    [...IMAGE_WIDTH_PRESETS.suggestedProduct],
    320,
  );
}
