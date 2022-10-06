import React from "react";
import Styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={Styles.welcome}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3310/3310113.png"
        alt="Welcome page"
      />
      <p>
        This page for showing more about routes between pages and responsive
        navbar
      </p>
    </div>
  );
};

export default Welcome;
