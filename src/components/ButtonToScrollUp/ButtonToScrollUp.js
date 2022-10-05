import React, { useEffect, useState } from "react";

// css module
import Styles from "./ButtonToScrollUp.module.css";

// icon
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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.scroll_To_Up_Btton}>
      {backToTop && (
        <button className={Styles.button_Up} onClick={() => scrollUp()}>
          <FaArrowUp className={Styles.icon} />
        </button>
      )}
    </div>
  );
};

export default ButtonToScrollUp;
