import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className={Styles.notfound}>
      <h2>Oops!</h2>
      <img
        src="https://cdn-icons-png.flaticon.com/512/7465/7465751.png"
        alt="Not Found pages"
      />
      <h3>404 - PAGE NOT FOUND</h3>
      <h4>
        The page you are looking for might be removed or temporarily unavailable
      </h4>
      <button onClick={() => navigate("/")}>GO TO HOME</button>
    </section>
  );
};

export default NotFound;
