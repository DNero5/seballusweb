
"use client";

import React, { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// Create a custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// CartProvider component to wrap the application
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to remove items from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

