import React, { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedTotalAmount = state.totalAmount;
  let updatedItems = [...state.items];

  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingItemIndex !== -1) {
        updatedItems[existingItemIndex].amount += action.item.amount;
      } else {
        updatedItems.push(action.item);
      }

      updatedTotalAmount += action.item.amount * action.item.price;

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE_ITEM":
      const removingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const removedItem = state.items[removingItemIndex];

      updatedTotalAmount = state.totalAmount - removedItem.price;

      if (removingItemIndex !== -1 && removedItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else if (removingItemIndex !== -1) {
        updatedItems[removingItemIndex].amount -= 1;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
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
