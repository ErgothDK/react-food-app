import React, { useRef, useState } from "react";
import styles from "./MealsItemForm.module.css";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  const minAmount = 1;
  const maxAmount = 10;
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountItemRef = useRef();

  const addItemHandler = (e) => {
    e.preventDefault();
    const amount = +amountItemRef.current.value;
    if (
      amount < minAmount ||
      amount > maxAmount ||
      amountItemRef.current.value.trim() === ""
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddItem(amount);
  };

  return (
    <form className={styles.form} onSubmit={addItemHandler}>
      <Input
        input={{
          type: "number",
          id: `txtQty${props.id}`,
          min: minAmount,
          max: maxAmount,
          step: 1,
          defaultValue: 1,
        }}
        label="Qty"
        ref={amountItemRef}
      />
      <button>+ Add</button>
      {!isAmountValid && (
        <p>
          Please enter a valid amount ({minAmount} - {maxAmount}).
        </p>
      )}
    </form>
  );
};

export default MealsItemForm;
