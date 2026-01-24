import { ROUTES } from "@/Constants/Routes";
import AppStore from "../AppStore";

export function onMountChecks() {
  const location = window.location;
  const dispatch = AppStore.dispatch;

  if (location.pathname === ROUTES.CHECKOUT) {
    // TODO handle open the otp login modal if not logged in
  }
}