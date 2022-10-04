import React, { useEffect, useState } from "react";
import Styles from "./ButtonToScrollUp.module.css";

import { FaArrowUp } from "react-icons/fa";

const ButtonToScrollUp = () => {
  const [backToTop, setBackTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);
  console.log(backToTop, "aaaaaaaaaaaaaaaaaaaaaaaaaaa");

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={Styles.scrollToUpBtton}>
      {backToTop && (
        <button className={Styles.buttonUp} onClick={() => scrollUp()}>
          <FaArrowUp className={Styles.icon} />
        </button>
      )}
    </div>
  );
};

export default ButtonToScrollUp;
