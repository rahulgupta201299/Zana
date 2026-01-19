import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import cartModifyServiceAction from "@/Redux/Cart/Services/CartModifyService";
import { CartDetailResType } from "@/Redux/Cart/Types";
import { TAppDispatch } from "@/Configurations/AppStore";
import { setOpenCart } from "@/Redux/Cart/Reducer";
import { createDebounce } from "@/Utils/Debounce";

export default function useCart() {
  const cartDetail = useSelector(cartDetailSelector);
  const [cartItem, setCartItem] = useState<Record<string, number>>({});
  
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();

  const debounceMapRef = useRef<Record<string, any>>({});

  const loginDetails = useSelector(getLoginDetails);
  const { phoneNumber = "" } = loginDetails;

  function getDebounce(productId: string) {
    if (!debounceMapRef.current[productId]) {
      debounceMapRef.current[productId] = createDebounce(
        (pid: string, qty: number, optional: any = {}) => {
          addToCart(pid, qty, optional);
        },
        500,
      );
    }

    return debounceMapRef.current[productId];
  }

  async function addToCart(
    productId: string,
    quantity?: number,
    optional?: { easyCheckout?: boolean, navigateTo?: string }
  ): Promise<void> {
    const getProductQuantity = quantity || cartItem[productId];

    if (!getProductQuantity && typeof quantity !== "number") return;

    try {
      const response = (await dispatch(
        cartModifyServiceAction({
          phoneNumber,
          productId,
          quantity: getProductQuantity,
        }),
      )) as CartDetailResType;
      const { phoneNumber: _phoneNumber, ...rest } = response;

      updateState(rest);

      if (optional?.easyCheckout) dispatch(setOpenCart(true))
      if (optional?.navigateTo) navigate(optional.navigateTo)
      
    } catch (error) {
      const { message = "" } = error || {};
      enqueueSnackbar({
        variant: "error",
        message,
      });
      updateState(cartDetail);
    }
  }

  function incrementToCart(
    productId: string,
    maxQuantityAvailable: number,
    { saveToDb = false, easyCheckout = false, navigateTo = '' }: { saveToDb?: boolean, easyCheckout?: boolean, navigateTo?: string } = {}
  ) {
    const getProductQuantity = cartItem[productId] || 0;

    if (getProductQuantity >= maxQuantityAvailable) return;

    setCartItem((prev) => {
      return {
        ...prev,
        [productId]: getProductQuantity + 1,
      };
    });

    if (!saveToDb) return;

    getDebounce(productId)(productId, getProductQuantity + 1, { easyCheckout, navigateTo });
  }

  function decrementToCart(productId: string, { saveToDb = false }: { saveToDb?: boolean } = {}) {
    const getProductQuantity = cartItem[productId] || 0;

    if (getProductQuantity <= 0) return;

    setCartItem((prev) => {
      return {
        ...prev,
        [productId]: getProductQuantity - 1,
      };
    });

    if (!saveToDb) return;

    getDebounce(productId)(productId, getProductQuantity - 1);
  }

  // TODO
  function clearCart() {}

  function removeItemToCart(productId: string) {
    setCartItem((prev) => {
      return {
        ...prev,
        [productId]: 0,
      };
    });
    addToCart(productId, 0);
  }

  function getTotalQuantity() {
    return Object.values(cartItem).reduce((acc, curr) => acc + curr, 0);
  }

  function getQuantity(productId: string) {
    return cartItem[productId] || 0;
  }

  function updateState(cartDetail: Omit<CartDetailResType, "phoneNumber">) {
    const obj = cartDetail.items.reduce((acc, curr) => {
      acc[curr.product._id] = curr.quantity;
      return acc;
    }, {});
    setCartItem(obj);
  }

  function performOps() {
    updateState(cartDetail);
  }

  useEffect(() => {
    performOps();
  }, []);

  return {
    addToCart,
    getQuantity,
    getTotalQuantity,
    decrementToCart,
    incrementToCart,
    clearCart,
    removeItemToCart,
  };
}
