import React from "react";
import Styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={Styles.spinner}>
      <img src="../images/833.gif" alt="Loading..." />
      <h3>Loading... :(</h3>
    </div>
  );
};

export default Spinner;
