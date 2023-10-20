import React, { useContext } from "react";
import styles from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../store/cartContext";

const MealsItem = (props) => {
  const cartContext = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addItemHandler = (amount) => {
    const result = cartContext.addItem({ ...props, amount: amount });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm {...props} onAddItem={addItemHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
