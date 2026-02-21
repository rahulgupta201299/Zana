import { Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import useCart from "@/hooks/useCart";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import { replaceSpacesWithHiphen } from "@/Utils/StringUtils";
import { Minus, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TAppDispatch } from "@/Configurations/AppStore";
import { setOpenCouponDialog } from "@/Redux/Cart/Reducer";

export default function Cart() {
  const navigate = useNavigate();

  const cartDetail = useSelector(cartDetailSelector);

  const { removeItemFromCart, decrementToCart, incrementToCart, getTotalQuantity } = useCart();
  const { subtotal = 0, discountAmount = 0, totalAmount = 0, processedItems = [], couponCode = '' } = cartDetail

  const totalItems = getTotalQuantity()

  const dispatch = useDispatch<TAppDispatch>();

  function handleProductClick(productCategory: string, productName: string, productId: string) {
    const category = replaceSpacesWithHiphen(productCategory);
    const name = replaceSpacesWithHiphen(productName);

    navigate(`${SUB_ROUTES.PRODUCT}/${category}/${name}/${productId}`)
  }

  function handleApplyCoupon() {
    dispatch(setOpenCouponDialog(true))
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#181818' }}>
      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <h1 className="text-white text-3xl md:text-5xl font-black mb-6 md:mb-8">YOUR CART</h1>

        {processedItems.length === 0 ? (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-16 md:py-32">
            <div className="w-32 h-32 md:w-48 md:h-48 mb-6 opacity-20">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2L7.17 4H3C1.9 4 1 4.9 1 6V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V6C23 4.9 22.1 4 21 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="currentColor" className="text-yellow-400" />
              </svg>
            </div>
            <p className="text-white text-2xl md:text-3xl font-bold mb-2">Your cart is empty</p>
            <p className="text-white/60 text-base md:text-lg mb-8">Add some products to get started</p>
            <button
              onClick={() => navigate('/product-catalog')}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              SHOP NOW
            </button>
          </div>
        ) : (
          /* Cart with Items */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Left: Cart Items */}
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {processedItems.map((item) => {
                  const { product, quantity = 0, price = 0, totalPrice = 0 } = item;
                  const { _id: productId = '', category = '', imageUrl = '', name = '', shortDescription = '', quantityAvailable = 0 } = product || {}

                  return (
                    <div
                      key={productId}
                      className="bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:border-yellow-400 transition-colors"
                      onClick={() => handleProductClick(category, name, productId)}
                    >
                      <div style={{ cursor: 'pointer' }} className="flex gap-4 p-4">
                        {/* Product Image */}
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg overflow-hidden">
                          <img
                            src={imageUrl}
                            alt={name}
                            className="w-full h-full object-contain p-2"
                            onError={(e) => {
                              e.currentTarget.src = '/bike-placeholder.svg';
                            }}
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="text-white font-bold text-lg md:text-xl mb-1 hover:text-yellow-400 transition-colors">
                              {name}
                            </h3>
                            <p className="text-white/60 text-sm md:text-base">
                              {shortDescription || 'Premium motorcycle accessory'}
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            {/* Price */}
                            <div>
                              <span className="text-yellow-400 font-bold text-xl md:text-2xl">
                                ₹ {price.toLocaleString()}
                              </span>
                              {quantity > 1 && (
                                <p className="text-white/40 text-sm">
                                  ₹ {(totalPrice).toLocaleString()} total
                                </p>
                              )}
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2 bg-white/10 rounded-lg">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    decrementToCart(productId)
                                  }}
                                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white hover:text-yellow-400 transition-colors"
                                >
                                  <Minus size={20} />
                                </button>
                                <span className="text-white font-medium w-8 text-center text-lg">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    incrementToCart(product, productId, quantityAvailable)
                                  }}
                                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white hover:text-yellow-400 transition-colors"
                                >
                                  <Plus size={20} />
                                </button>
                              </div>

                              {/* Remove Button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeItemFromCart(productId)
                                }}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/60 hover:text-red-400 transition-colors"
                                title="Remove item"
                              >
                                <X size={24} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Continue Shopping Button */}
              <button
                onClick={() => navigate(ROUTES.PRODUCT_CATALOG)}
                className="mt-6 w-full bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                + Continue Shopping
              </button>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white/5 rounded-lg border border-white/10 p-6 sticky top-6">
                <h2 className="text-white text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4">
                  {/* Items Count */}
                  <div className="flex justify-between text-white/80">
                    <span>Items ({totalItems})</span>
                    <span>₹ {subtotal}</span>
                  </div>

                  {/* Subtotal */}
                  <div className="flex justify-between text-white">
                    <span className="font-semibold">Subtotal</span>
                    <span className="font-semibold">₹ {subtotal}</span>
                  </div>

                  {/* Discount (if applicable) */}
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span className="font-semibold">Discount ({couponCode})</span>
                      <span className="font-semibold">- ₹ {discountAmount}</span>
                    </div>
                  )}

                  {/* Discount success message */}
                  {discountAmount > 0 && (
                    <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-3">
                      <p className="text-green-400 text-sm text-center">
                        🎉 You saved ₹ {discountAmount}!
                      </p>
                    </div>
                  )}

                  <Stack direction="row" justifyContent="flex-end">
                    <Typography
                      sx={{
                        textTransform: 'uppercase',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#3B82F6',
                        cursor: "pointer",
                        "&:hover": {
                          opacity: 0.8,
                        },
                      }}
                      onClick={handleApplyCoupon}
                    >
                      {discountAmount > 0 ? "update" : "apply"} coupon
                    </Typography>
                  </Stack>

                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-xl font-bold">Total</span>
                      <span className="text-yellow-400 text-2xl font-bold">
                        ₹ {totalAmount}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-yellow-400 text-black py-4 rounded-lg text-xl font-bold hover:bg-yellow-500 transition-colors mt-6"
                  >
                    PROCEED TO CHECKOUT
                  </button>

                  <p className="text-white/50 text-xs text-center mt-4">
                    Taxes and shipping calculated at checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
