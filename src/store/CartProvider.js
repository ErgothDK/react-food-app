import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItems = [...state.items];
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingItemIndex !== -1) {
        updatedItems[existingItemIndex].amount += action.item.amount;
      } else {
        updatedItems.push(action.item);
      }

      const updatedTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
        totalAmount: state.totalAmount - action.amount,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState);
  const addItemHandler = (item) => {
    cartDispatch({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    cartDispatch({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
