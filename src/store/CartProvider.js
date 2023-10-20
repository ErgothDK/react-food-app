import React from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const addItemHandler = () => {};

  const removeItemHandler = () => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => addItemHandler,
    removeItem: (id) => removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
