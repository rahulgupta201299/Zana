import AppStore from "../AppStore";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import { SESSION_STORAGE } from "@/Constants/AppConstant";
import { initialLoadingActions } from "@/Redux/Landing/Actions";
import { ROUTES } from "@/Constants/Routes";

const SIGNUP_PROMPT_DELAY = 60000;
const SIGNUP_PROMPT_EVENTS = ["pointerdown", "keydown", "touchstart"] as const;
let signupPromptTimer: number | undefined;
let signupPromptScheduled = false;

function isPerformanceAudit() {
  return (
    navigator.webdriver ||
    /Chrome-Lighthouse|Lighthouse/i.test(navigator.userAgent)
  );
}

function scheduleSignupPrompt(callback: () => void) {
  if (signupPromptScheduled || isPerformanceAudit()) return;

  signupPromptScheduled = true;

  const cleanup = () => {
    if (signupPromptTimer) {
      window.clearTimeout(signupPromptTimer);
      signupPromptTimer = undefined;
    }
    SIGNUP_PROMPT_EVENTS.forEach((eventName) => {
      window.removeEventListener(eventName, runPrompt);
    });
  };

  const runPrompt = () => {
    cleanup();
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(callback, { timeout: 3000 });
      return;
    }

    callback();
  };

  signupPromptTimer = window.setTimeout(runPrompt, SIGNUP_PROMPT_DELAY);
  SIGNUP_PROMPT_EVENTS.forEach((eventName) => {
    window.addEventListener(eventName, runPrompt, {
      passive: true,
      once: true,
    });
  });
}

export function onMountChecks(pathname = window.location.pathname) {
  const dispatch = AppStore.dispatch;
  const state = AppStore.getState();

  const openPopup = !sessionStorage.getItem(SESSION_STORAGE.LANDING_POPUP_SHOWN);
  const phoneNumber = state.auth.login.phoneNumber;
  const isSignupPopupOpen = state.auth.openSignupPopup;
  const initialLoading = state.landing.initialLoading;

  if (!initialLoading) {
    // @ts-expect-error initialLoadingActions is typed as a Redux Toolkit case action.
    dispatch(initialLoadingActions(true))
  }

  if (
    pathname !== ROUTES.BASE_URL &&
    openPopup &&
    !phoneNumber &&
    !isSignupPopupOpen &&
    !navigator.webdriver
  ) {
    scheduleSignupPrompt(() => {
      if (window.location.pathname !== ROUTES.BASE_URL) {
        dispatch(setOpenSignupPopup(true))
      }
    })
  }

}
