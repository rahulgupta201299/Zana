import { X, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartSidebar = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartSidebarProps) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate discount (10% if subtotal > 10,000)
  const discount = subtotal > 10000 ? subtotal * 0.1 : 0;
  
  // Calculate total
  const total = subtotal - discount;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] lg:w-[560px] bg-[#1a1a1a] shadow-2xl z-[101] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-bold">Cart</h2>
              <p className="text-white/60 text-sm mt-1">{totalItems} {totalItems === 1 ? 'PRODUCT' : 'PRODUCTS'}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-400 transition-colors p-2"
            >
              <X size={28} />
            </button>
          </div>

          {/* Cart Items - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-32 h-32 mb-6 opacity-20">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2L7.17 4H3C1.9 4 1 4.9 1 6V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V6C23 4.9 22.1 4 21 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="currentColor" className="text-yellow-400"/>
                  </svg>
                </div>
                <p className="text-white/60 text-lg">Your cart is empty</p>
                <p className="text-white/40 text-sm mt-2">Add products to get started</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white/5 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    activeItem === item.id ? 'border-yellow-400' : 'border-transparent'
                  }`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <div className="flex gap-4 p-3 md:p-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-lg flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white font-bold text-base md:text-lg mb-1 line-clamp-2">
                          {item.name}
                        </h3>
                        <p className="text-white/60 text-xs md:text-sm line-clamp-2">
                          {item.description || 'Premium motorcycle accessory'}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Price */}
                        <span className="text-yellow-400 font-bold text-lg md:text-xl">
                          ₹ {item.price.toLocaleString()}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-white/10 rounded-lg">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (item.quantity > 1) {
                                onUpdateQuantity(item.id, item.quantity - 1);
                              } else {
                                onRemoveItem(item.id);
                              }
                            }}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white hover:text-yellow-400 transition-colors"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="text-white font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onUpdateQuantity(item.id, item.quantity + 1);
                            }}
                            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white hover:text-yellow-400 transition-colors"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer - Add More Products Button */}
          {items.length > 0 && (
            <div className="border-t border-white/10 p-4 md:p-6">
              <button
                onClick={() => {
                  onClose();
                  navigate('/product-catalog');
                }}
                className="w-full mb-4 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                + Add more products
              </button>

              {/* Total and Checkout */}
              <div className="space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center text-white/80">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-lg font-semibold">₹ {subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                {/* Discount (only show if applicable) */}
                {discount > 0 && (
                  <div className="flex justify-between items-center text-green-400">
                    <span className="text-sm">Discount (10%)</span>
                    <span className="text-lg font-semibold">- ₹ {discount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                )}

                {/* Discount message (if close to threshold) */}
                {subtotal > 8000 && subtotal <= 10000 && (
                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-3">
                    <p className="text-yellow-400 text-xs text-center">
                      Add ₹ {(10000 - subtotal).toLocaleString()} more to get 10% discount!
                    </p>
                  </div>
                )}

                {/* Total */}
                <div className="flex justify-between items-center pt-3 border-t border-white/10">
                  <div>
                    <p className="text-white/60 text-xs mb-1">Total Cart Value</p>
                    <span className="text-white text-lg font-semibold">Total</span>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-400 text-2xl md:text-3xl font-bold">
                      ₹ {total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    navigate('/checkout');
                  }}
                  className="w-full relative bg-white text-black px-8 py-4 rounded-lg text-lg font-bold overflow-hidden group"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)'
                  }}
                >
                  <span className="relative z-10">CHECKOUT</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;

