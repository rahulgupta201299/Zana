import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
}

const CART_STORAGE_KEY = 'zana_cart_items';

export const useCart = () => {
  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cartItems]);

  // Add item to cart
  const addToCart = (productId: string, productName: string, price: number, image: string, description?: string) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        return [...prevItems, {
          id: productId,
          name: productName,
          price,
          quantity: 1,
          image,
          description
        }];
      }
    });
  };

  // Update quantity
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id);
      return;
    }
    
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Remove item
  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Calculate discount (10% if subtotal > 10,000)
  const discount = subtotal > 10000 ? subtotal * 0.1 : 0;

  // Calculate total
  const total = subtotal - discount;

  // Total items count
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    discount,
    total,
    totalItems
  };
};

