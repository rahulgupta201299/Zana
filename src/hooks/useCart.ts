import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import cartModifyServiceAction from "@/Redux/Cart/Services/CartModifyService";
import { CartDetailResType, CartItemDetail } from "@/Redux/Cart/Types";
import { TAppDispatch } from "@/Configurations/AppStore";
import { resetCart, setOpenCart, setProcessedCart } from "@/Redux/Cart/Reducer";
import { createDebounce } from "@/Utils/Debounce";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import getCartDetailServiceAction from "@/Redux/Cart/Services/GetCartDetailService";

export default function useCart() {
  const cartDetail = useSelector(cartDetailSelector);

  const { processedItems = [] } = cartDetail;

  const cartItems: CartItemDetail[] = processedItems || [];

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
      (await dispatch(getCartDetailServiceAction())) as CartDetailResType;
    } catch (error: any) {}
  }

  async function handleSaveToDB(
    details: CartItemDetail[],
    optional?: { easyCheckout?: boolean; navigateTo?: string, phoneNumber?: string },
  ): Promise<CartDetailResType> {
    const items = details.map((item) => ({
      productId: item.product._id,
      quantity: item.quantity,
    }));

    const _phoneNumber = optional?.phoneNumber || phoneNumber

    try {
      const response = (await dispatch(
        cartModifyServiceAction({
          phoneNumber: _phoneNumber,
          items,
        }),
      )) as CartDetailResType;

      const { unProcessedItems = [] } = response || {};

      if (unProcessedItems.length) {
        enqueueSnackbar({
          variant: "warning",
          message: `Some items couldn't be processed due to unavailability.`,
        });
      }

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

  async function validateCart(
    cartItems: CartItemDetail[],
  ): Promise<CartDetailResType> {
    try {
      const response = await handleSaveToDB(cartItems);
      const { unProcessedItems = [] } = response;

      if (unProcessedItems.length) {
        enqueueSnackbar({
          variant: "info",
          message: "Please check the updated cart",
        });
        throw new Error("Some items couldn't be processed");
      }

      return response;
    } catch (error: any) {
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

    const newProductDetails = cartItems.map((item) => {
      if (item.product._id === productId) {
        productAdded = true;
        return {
          ...item,
          quantity,
        };
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

    dispatch(setProcessedCart([...newProductDetails]));

    handleSaveToDB(newProductDetails, optional);
  }

  function saveCartToDB(phoneNumber?: string) {
    if (!cartItems.length) return;
    handleSaveToDB(cartItems, { phoneNumber });
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

    const newProductDetails = cartItems.map((item) => {
      if (item.product._id === productId) {
        productIncremented = true;
        return {
          ...item,
          quantity: item.quantity + 1,
        };
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

    dispatch(setProcessedCart([...newProductDetails]));

    debounceFn(newProductDetails, { easyCheckout, navigateTo });
  }

  function decrementToCart(productId: string) {
    const productQuantity = getQuantity(productId);

    if (productQuantity <= 0) return;

    const newProductDetails = cartItems.map((item) => {
      if (item.product._id === productId)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    });

    const newFilterProducts = newProductDetails.filter((it) => it.quantity);

    dispatch(setProcessedCart(newFilterProducts));

    debounceFn(newProductDetails);
  }

  function clearCart() {
    // @ts-ignore
    dispatch(resetCart);
  }

  function removeItemFromCart(productId: string) {
    const newProductDetails = cartItems.map((item) => {
      if (item.product._id === productId) return { ...item, quantity: 0 };
      return item;
    });
    const filterProducts = newProductDetails.filter((item) => item.quantity);
    dispatch(setProcessedCart([...filterProducts]));
    debounceFn(newProductDetails);
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
    removeItemFromCart,
    validateCart,
    getCartFromDB,
    saveCartToDB,
  };
}
