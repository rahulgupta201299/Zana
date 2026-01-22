import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import cartModifyServiceAction from "@/Redux/Cart/Services/CartModifyService";
import { CartDetailResType, CartItemDetail } from "@/Redux/Cart/Types";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { setOpenCart } from "@/Redux/Cart/Reducer";
import { createDebounce } from "@/Utils/Debounce";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { cartModifyServiceName, getCartDetailServiceName } from "@/Redux/Cart/Action";
import { autoRetry } from "@/Utils/AutoRetryMechanism";

export default function useCart() {
  const cartDetail = useSelector(cartDetailSelector);

  const { processedItems = [] } = cartDetail;

  const [cartItems, setCartItems] = useState<CartItemDetail[]>(structuredClone(processedItems));

  const cartLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [cartModifyServiceName, getCartDetailServiceName]))
  
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();

  const loginDetails = useSelector(getLoginDetails);
  const { phoneNumber = "" } = loginDetails;

  const debounceFn = useMemo(() => {
    return createDebounce(handleSaveToDB, 500);
  }, [])

  const retry = useMemo(() => {
    return autoRetry()
  }, [])

  async function handleSaveToDB(
    details: CartItemDetail[],
    optional?: { easyCheckout?: boolean; navigateTo?: string },
  ): Promise<void> {

    const items = details.map(item => ({productId: item.product._id, quantity: item.quantity }))

    try {
      const response = (await dispatch(
        cartModifyServiceAction({
          phoneNumber: "+919163277940",
          items,
        }),
      )) as CartDetailResType;

      const { unProcessedItems = [], processedItems = [] } = response;

      setCartItems(processedItems);

      if (unProcessedItems.length) {
        enqueueSnackbar({
          variant: "warning",
          message: `Some items couldn't be processed due to unavailability.`
        });
      }

      if (optional?.easyCheckout) dispatch(setOpenCart(true));
      if (optional?.navigateTo) navigate(optional.navigateTo);
    } catch (error) {
      const { message = "" } = error || {};
      enqueueSnackbar({
        variant: "error",
        message,
      });
      setCartItems(processedItems);
    }
  }

  function addToCart(optional?: { easyCheckout?: boolean; navigateTo?: string }) {
    handleSaveToDB(cartItems, optional)
  }

  function incrementToCart(
    product: ShopByProductDetailsType,
    productId: string,
    maxQuantityAvailable: number,
    {
      saveToDb = false,
      easyCheckout = false,
      navigateTo = "",
    }: { saveToDb?: boolean; easyCheckout?: boolean; navigateTo?: string } = {},
  ) {
    const productQuantity = getQuantity(productId);

    if (productQuantity >= maxQuantityAvailable) return;

    let productIncremented = false;

    const newProductDetails = cartItems.map((item) => {
      if (item.product._id === productId) {
        item.quantity += 1;
        productIncremented = true
      }
      return item;
    });

    if (!productIncremented) {
      newProductDetails.push({
        product,
        quantity: 1,
        price: product.price,
        totalPrice: product.price,
        _id: Date.now().toString(),
      })
    }

    setCartItems(newProductDetails);

    if (!saveToDb) return;

    debounceFn(newProductDetails, { easyCheckout, navigateTo });
  }

  function decrementToCart(
    productId: string,
    { saveToDb = false }: { saveToDb?: boolean } = {},
  ) {
    const productQuantity = getQuantity(productId);

    if (productQuantity <= 0) return;

    const newProductDetails = cartItems.map((item) => {
      if (item.product._id === productId) item.quantity -= 1;
      return item;
    });

    setCartItems(newProductDetails);

    if (!saveToDb) return;

    debounceFn(newProductDetails);
  }

  // TODO
  function clearCart() {
    setCartItems([]);
  }

  function removeItemToCart(productId: string) {
    const filterProducts = cartItems.filter(
      (item) => item.product._id !== productId,
    );
    setCartItems(filterProducts);
    debounceFn(filterProducts);
  }

  function getTotalQuantity() {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  function getQuantity(productId: string) {
    return (
      cartItems.find((item) => item.product._id === productId)?.quantity || 0
    );
  }

  return {
    addToCart,
    getQuantity,
    getTotalQuantity,
    decrementToCart,
    incrementToCart,
    clearCart,
    removeItemToCart,
    cartLoading,
  };
}
