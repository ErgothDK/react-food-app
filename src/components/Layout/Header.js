import React, { Fragment } from "react";
import background from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Food App</h1>
        <HeaderCartButton onClick={props.onToggleCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={background} alt="Food App Background" />
      </div>
    </Fragment>
  );
};

export default Header;
