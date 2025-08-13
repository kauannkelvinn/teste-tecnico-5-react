import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    setItems((prevItems) => {
      const existing = prevItems.find((i) => i.productId === product.productId);
      if (existing) {
        return prevItems.map((i) =>
          i.productId === product.productId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setItems((prevItems) =>
      prevItems.map((i) =>
        i.productId === productId ? { ...i, quantity } : i
      )
    );
  };

  const removeItem = (productId) => {
    setItems((prevItems) => prevItems.filter((i) => i.productId !== productId));
  };

  const clearCart = () => setItems([]);

  const totalQuantity = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQuantity, removeItem, clearCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
