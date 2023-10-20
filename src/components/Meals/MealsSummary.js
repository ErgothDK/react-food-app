import React from "react";
import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Meals Summary</h2>
      <p>
        Indulge in the flavors of a perfectly grilled salmon fillet paired with
        a luscious lemon butter sauce.
      </p>
      <p>
        This meal is a delightful fusion of healthy and delicious, making it an
        ideal choice for both a quick weeknight dinner or a special occasion.
      </p>
    </section>
  );
};

export default MealsSummary;
