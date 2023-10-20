import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cartContext";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const totalItems = cartContext.items.reduce(
    (total, item) => total + item.amount,
    0
  );

  const [btnIsAnimated, setBtnIsAnimated] = useState(false);

  const btnClasses = `${styles.button} ${btnIsAnimated ? styles.bump : ""}`;

  useEffect(() => {
    if (totalItems === 0) {
      return;
    }

    setBtnIsAnimated(true);

    const timer = setTimeout(() => {
      setBtnIsAnimated(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [totalItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
