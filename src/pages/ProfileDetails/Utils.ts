import AppStore from "@/Configurations/AppStore";
import { resetAuth } from "@/Redux/Auth/Reducer";
import { resetCart } from "@/Redux/Cart/Reducer";
import { enqueueSnackbar } from "notistack";

export function logout() {
  const dispatch = AppStore.dispatch;

  dispatch(resetAuth);
  dispatch(resetCart);

  enqueueSnackbar({
    variant: "info",
	message: "You have been logged Out!",
    autoHideDuration: 2000,
  });
}
