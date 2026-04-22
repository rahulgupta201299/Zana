import { SocialMediaPlatformEnum } from "@/Constants/AppConstant";
import { AddressType } from "@/pages/OrderDetails/Types";

export function replaceHiphenWithSpaces(val: string): string {
  if (!val) return "";
  return val.toLowerCase().split("-").join(" ");
}

export function replaceSpacesWithHiphen(val: string): string {
  if (!val) return "";
  return val.toLowerCase().split(" ").join("-");
}

export function replaceSpecialCharactersWithHyphen(val: string): string {
  if (!val) return "";

  return (
    val
      .toLowerCase()
      // replace non-alphanumeric with hyphen directly
      .replace(/[^a-z0-9]+/gi, "-")
      // remove leading/trailing hyphens
      .replace(/^-+|-+$/g, "")
  );
}

export const handleSocialMedia = (
  platform: SocialMediaPlatformEnum,
  url: string,
  text?: string,
) => {
  switch (platform) {
    case SocialMediaPlatformEnum.FACEBOOK:
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank",
      );
      break;
    case SocialMediaPlatformEnum.INSTAGRAM:
      // Instagram doesn't have direct sharing, so copy to clipboard
      navigator.clipboard.writeText(`${text} ${url}`);
      break;
    case SocialMediaPlatformEnum.WHATSAPP:
      window.open(
        `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
        "_blank",
      );
      break;
  }
};

export const trimByLength = (text = "", maxLength = 40) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + " ...";
};

export function getAddressLabel(address: AddressType): string {
  if (!address) return "";

  const {
    addressLine1 = "",
    addressLine2 = "",
    city = "",
    state = "",
    postalCode = "",
    country = "",
  } = address;

  return `${addressLine1}, ${addressLine2 ? addressLine2 + ", " : ""}${city}, ${state} ${postalCode}, ${country}`;
}
