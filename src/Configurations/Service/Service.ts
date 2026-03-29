import AppStore from "../AppStore";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import { SESSION_STORAGE } from "@/Constants/AppConstant";

export function onMountChecks() {
  const dispatch = AppStore.dispatch;
  const state = AppStore.getState();

  const openPopup = !sessionStorage.getItem(SESSION_STORAGE.LANDING_POPUP_SHOWN);
  const phoneNumber = state.auth.login.phoneNumber;

  if (openPopup && !phoneNumber) {
    setTimeout(() => {
      dispatch(setOpenSignupPopup(true))
    }, 1000)
  }

}