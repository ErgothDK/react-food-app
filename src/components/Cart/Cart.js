import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const items = [{ id: 1, name: "sushi", amount: 2, price: 10 }];
  const totalAmount = 12.5;

  const cartItems = items.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });

  return (
    <Modal onToggleCart={props.onToggleCart}>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onToggleCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
