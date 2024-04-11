import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    const updatedTotal = cartTotal + product.price;
    setCartItems(updatedCartItems);
    setCartTotal(updatedTotal);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    const removedItem = updatedCartItems.splice(index, 1)[0];
    const updatedTotal = cartTotal - removedItem.price * removedItem.quantity;
    setCartItems(updatedCartItems);
    setCartTotal(updatedTotal);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartTotal, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
