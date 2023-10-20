import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartItems = cartContext.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        {...item}
        onAdd={addItemHandler}
        onRemove={removeItemHandler}
      />
    );
  });

  return (
    <Modal onToggleCart={props.onToggleCart}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onToggleCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
