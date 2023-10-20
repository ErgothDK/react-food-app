import React from "react";
import styles from "./MealsItemForm.module.css";
import Input from "../../UI/Input";

const MealsItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        input={{
          type: "number",
          id: `txtQty${props.id}`,
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
        label="Qty"
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;
