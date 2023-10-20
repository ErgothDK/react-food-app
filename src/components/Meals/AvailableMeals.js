import React from "react";
import styles from "./AvailableMeals.module.css";
import DUMMY_MEALS from "../../assets/dummyMeals";
import Card from "../UI/Card";
import MealsItem from "./MealsItem/MealsItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MealsItem {...meal} key={meal.id} />;
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
