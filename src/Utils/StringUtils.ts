import { SocialMediaPlatformEnum } from "@/Constants/AppConstant";

export function replaceHiphenWithSpaces(val: string): string {
  if (!val) return "";
  return val.toLowerCase().split("-").join(" ");
}

export function replaceSpacesWithHiphen(val: string): string {
  if (!val) return "";
  return val.toLowerCase().split(" ").join("-");
}

export const handleSocialMedia = (platform: SocialMediaPlatformEnum, url: string, text?: string) => {

  switch (platform) {
    case SocialMediaPlatformEnum.FACEBOOK:
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank"
      );
      break;
    case SocialMediaPlatformEnum.INSTAGRAM:
      // Instagram doesn't have direct sharing, so copy to clipboard
      navigator.clipboard.writeText(`${text} ${url}`);
      break;
    case SocialMediaPlatformEnum.WHATSAPP:
      window.open(
        `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
        "_blank"
      );
      break;
  }
};
