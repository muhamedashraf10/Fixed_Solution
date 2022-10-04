import React from "react";
import Styles from "./CardsOfPostsUser.module.css";

const CardsOfPostsUser = ({ posts }) => {
  return (
    <article className={Styles.post}>
      <p>{posts.title}</p>
    </article>
  );
};

export default CardsOfPostsUser;
