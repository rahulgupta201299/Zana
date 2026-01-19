import useCart from "@/hooks/useCart";
import { cartDetailSelector } from "@/Redux/Cart/Selectors";
import { Minus, Plus, X } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CartCheckoutPage = () => {
  const navigate = useNavigate();
  
  const cartDetail = useSelector(cartDetailSelector);

  const { removeItemToCart, decrementToCart, incrementToCart, getTotalQuantity } = useCart();
  const { subtotal, discountAmount: discount, totalAmount: total } = cartDetail

  const totalItems = getTotalQuantity()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#181818' }}>
      {/* Cart Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <h1 className="text-white text-3xl md:text-5xl font-black mb-6 md:mb-8">YOUR CART</h1>

        {cartDetail.items.length === 0 ? (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-16 md:py-32">
            <div className="w-32 h-32 md:w-48 md:h-48 mb-6 opacity-20">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2L7.17 4H3C1.9 4 1 4.9 1 6V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V6C23 4.9 22.1 4 21 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="currentColor" className="text-yellow-400"/>
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
                {cartDetail.items.map((item) => (
                  <div
                    key={item.product._id}
                    className="bg-white/5 rounded-lg border border-white/10 overflow-hidden hover:border-yellow-400 transition-colors"
                  >
                    <div className="flex gap-4 p-4">
                      {/* Product Image */}
                      <Link to={`/product/${item.product._id}`} className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg overflow-hidden">
                          <img
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            className="w-full h-full object-contain p-2"
                            onError={(e) => {
                              e.currentTarget.src = '/bike-placeholder.svg';
                            }}
                          />
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <Link to={`/product/${item.product._id}`}>
                            <h3 className="text-white font-bold text-lg md:text-xl mb-1 hover:text-yellow-400 transition-colors">
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className="text-white/60 text-sm md:text-base">
                            {item.product.shortDescription || 'Premium motorcycle accessory'}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                          {/* Price */}
                          <div>
                            <span className="text-yellow-400 font-bold text-xl md:text-2xl">
                              ₹ {item.price.toLocaleString()}
                            </span>
                            {item.quantity > 1 && (
                              <p className="text-white/40 text-sm">
                                ₹ {(item.totalPrice).toLocaleString()} total
                              </p>
                            )}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 bg-white/10 rounded-lg">
                              <button
                                onClick={() => decrementToCart(item.product._id, { saveToDb: true })}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white hover:text-yellow-400 transition-colors"
                              >
                                <Minus size={20} />
                              </button>
                              <span className="text-white font-medium w-8 text-center text-lg">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => incrementToCart(item.product._id, item.product.quantityAvailable, { saveToDb: true })}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white hover:text-yellow-400 transition-colors"
                              >
                                <Plus size={20} />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => removeItemToCart(item.product._id)}
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
                ))}
              </div>

              {/* Continue Shopping Button */}
              <button
                onClick={() => navigate('/product-catalog')}
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
                    <span>₹ {subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>

                  {/* Subtotal */}
                  <div className="flex justify-between text-white">
                    <span className="font-semibold">Subtotal</span>
                    <span className="font-semibold">₹ {subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                  </div>

                  {/* Discount (if applicable) */}
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span className="font-semibold">Discount (10%)</span>
                      <span className="font-semibold">- ₹ {discount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                    </div>
                  )}

                  {/* Discount threshold notification */}
                  {subtotal > 8000 && subtotal <= 10000 && (
                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                      <p className="text-yellow-400 text-sm text-center">
                        🎉 Add ₹ {(10000 - subtotal).toLocaleString()} more to get 10% discount!
                      </p>
                    </div>
                  )}

                  {/* Discount success message */}
                  {discount > 0 && (
                    <div className="bg-green-400/10 border border-green-400/30 rounded-lg p-3">
                      <p className="text-green-400 text-sm text-center">
                        🎉 You saved ₹ {discount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}!
                      </p>
                    </div>
                  )}

                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-xl font-bold">Total</span>
                      <span className="text-yellow-400 text-2xl font-bold">
                        ₹ {total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
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

export default CartCheckoutPage;

