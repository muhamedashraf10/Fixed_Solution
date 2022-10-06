import React from "react";
import Styles from "./ErrorNetwork.module.css";

const ErrorNetwork = ({ errorUser, errorPost, error }) => {
  const getErrorMessage = () => {
    if (errorUser) return errorUser;
    if (error) return error;
    if (errorPost) return errorPost;
    if (errorPost && errorUser) return errorPost;
  };

  return (
    <div className={Styles.error_Neywork}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6797/6797087.png"
        alt="404 Error"
      />
      <h3>{getErrorMessage()}</h3>
    </div>
  );
};

export default ErrorNetwork;
