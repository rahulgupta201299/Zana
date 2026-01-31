import AppStore from "../AppStore";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import { SESSION_STORAGE } from "@/Constants/AppConstant";

export function onMountChecks() {
  const location = window.location;
  const dispatch = AppStore.dispatch;

  const openPopup = !sessionStorage.getItem(SESSION_STORAGE.LANDING_POPUP_SHOWN);

  if (openPopup) {
    setTimeout(() => {
      dispatch(setOpenSignupPopup(true))
    }, 1000)
  }

}