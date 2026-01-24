import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import cartModifyServiceAction from "@/Redux/Cart/Services/CartModifyService";
import { CartDetailResType, CartItemDetail } from "@/Redux/Cart/Types";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { resetCart, setOpenCart, setProcessedCart } from "@/Redux/Cart/Reducer";
import { createDebounce } from "@/Utils/Debounce";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import getCartDetailServiceAction from "@/Redux/Cart/Services/GetCartDetailService";

export default function useCart() {
  const cartDetail = useSelector((state: TAppStore) => state.cart.cartDetail);

  const { processedItems = [] } = cartDetail;

  const [cartItems, setCartItems] = useState<CartItemDetail[]>(processedItems);

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<TAppDispatch>();
  const navigate = useNavigate();

  const loginDetails = useSelector(getLoginDetails);
  const { phoneNumber = "" } = loginDetails;

  const debounceFn = useMemo(() => {
    return createDebounce(handleSaveToDB, 500);
  }, []);

  async function getCartFromDB() {
    if (!phoneNumber) return;

    try {
      const response = await dispatch(getCartDetailServiceAction()) as CartDetailResType;
      const { processedItems = [] } = response;
      setCartItems(processedItems);
    } catch (error: any) {
      // const { message = "" } = error || {};
      // enqueueSnackbar({
      //   variant: "error",
      //   message,
      // });
      // throw error;
    }
  }

  async function handleSaveToDB(
    details: CartItemDetail[],
    optional?: { easyCheckout?: boolean; navigateTo?: string },
  ): Promise<CartDetailResType> {
    dispatch(setProcessedCart(details));

    const items = details.map((item) => ({
      productId: item.product._id,
      quantity: item.quantity,
    }));

    try {
      const response = (await dispatch(
        cartModifyServiceAction({
          phoneNumber,
          items,
        }),
      )) as CartDetailResType;

      const { processedItems = [], unProcessedItems = [] } = response;

      if (unProcessedItems.length) {
        enqueueSnackbar({
          variant: "warning",
          message: `Some items couldn't be processed due to unavailability.`,
        });
      }

      setCartItems(processedItems);

      if (optional?.easyCheckout) dispatch(setOpenCart(true));
      if (optional?.navigateTo) navigate(optional.navigateTo);

      return response;
    } catch (error) {
      const { message = "" } = error || {};
      enqueueSnackbar({
        variant: "error",
        message,
      });
      throw error;
    }
  }

  async function validateCart(): Promise<CartDetailResType> {
    try {
      const response = await handleSaveToDB(cartItems);
      const { unProcessedItems = [] } = response;

      if (unProcessedItems.length) {
        enqueueSnackbar({
          variant: "warning",
          message: "Please check the updated cart",
        });
        throw new Error("Some items couldn't be processed");
      }

      return response;
    } catch (error) {
      throw error;
    }
  }

  function addToCart(
    product: ShopByProductDetailsType,
    productId: string,
    quantity: number,
    maxQuantityAvailable: number,
    optional?: { easyCheckout?: boolean; navigateTo?: string },
  ) {

    if (quantity > maxQuantityAvailable) return;

    let productAdded = false;

    const newProductDetails = structuredClone(cartItems).map((item) => {
      if (item.product._id === productId) {
        item.quantity = quantity;
        productAdded = true;
      }
      return item;
    });

    if (!productAdded) {
      newProductDetails.push({
        product,
        quantity,
        price: product.price,
        totalPrice: product.price * quantity,
        _id: Date.now().toString(),
      });
    }

    setCartItems(newProductDetails)

    handleSaveToDB(newProductDetails, optional);
  }

  function incrementToCart(
    product: ShopByProductDetailsType,
    productId: string,
    maxQuantityAvailable: number,
    {
      easyCheckout = false,
      navigateTo = "",
    }: { easyCheckout?: boolean; navigateTo?: string } = {},
  ) {
    const productQuantity = getQuantity(productId);

    if (productQuantity >= maxQuantityAvailable) return;

    let productIncremented = false;

    const newProductDetails = structuredClone(cartItems).map((item) => {
      if (item.product._id === productId) {
        item.quantity += 1;
        productIncremented = true;
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
      });
    }

    setCartItems(newProductDetails);

    debounceFn(newProductDetails, { easyCheckout, navigateTo });
  }

  function decrementToCart(productId: string) {
    const productQuantity = getQuantity(productId);

    if (productQuantity <= 0) return;

    const newProductDetails = structuredClone(cartItems).map((item) => {
      if (item.product._id === productId) item.quantity -= 1;
      return item;
    });

    setCartItems(newProductDetails);

    debounceFn(newProductDetails);
  }

  // TODO
  function clearCart() {
    // dispatch(resetCart);
  }

  function removeItemFromCart(productId: string) {
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

  useEffect(() => {
    setCartItems(processedItems)
  }, [])

  return {
    addToCart,
    getQuantity,
    getTotalQuantity,
    decrementToCart,
    incrementToCart,
    clearCart,
    removeItemFromCart,
    validateCart,
    getCartFromDB,
  };
}
