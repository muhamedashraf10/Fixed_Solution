import React from "react";
import Styles from "./CardsOfPostsUser.module.css";
import { BsThreeDots } from "react-icons/bs";

const CardsOfPostsUser = ({ posts, user }) => {
  return (
    <article className={Styles.posts}>
      {posts.map((post) => (
        <div className={Styles.post} key={post.id}>
          <div className={Styles.icon}>
            <BsThreeDots />
          </div>
          <div className={Styles.cardContent}>
            <img src={`../images/${user.id}.png`} alt="User Profile" />
            <h2 className={Styles.userName}>{user.username}</h2>
            <h4 className={Styles.title}>{post.title}</h4>
            <button className={Styles.bttn}>Read More</button>
          </div>
        </div>
      ))}
    </article>
  );
};

export default CardsOfPostsUser;
