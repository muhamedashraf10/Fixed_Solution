import React, { useState } from "react";

// css module
import Styles from "./CardsOfPostsUser.module.css";

// icon
import { BsThreeDots, BsArrowUp, BsArrowDown } from "react-icons/bs";

const CardsOfPostsUser = ({ posts, user }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <article className={Styles.posts}>
      <div className={Styles.post} key={posts.id}>
        <div className={Styles.icon_Menu}>
          <BsThreeDots />
        </div>
        <div className={Styles.card_Content}>
          <img src={`../images/${user.id}.png`} alt="User Profile" />
          <h2 className={Styles.userName}>{user.username}</h2>
          <h3 className={Styles.title}>{posts.title}</h3>
          {isExpanded ? (
            <div className={Styles.more_Card_Body}>
              <h4 className={Styles.desc}>{posts.body}</h4>
              <h5>{user.name}</h5>
              <h6>{user.email}</h6>
            </div>
          ) : (
            ""
          )}

          <button
            onClick={() => setExpanded(!isExpanded)}
            className={Styles.bttn}
          >
            {isExpanded ? "Read Less" : "Read More"}
            {isExpanded ? (
              <BsArrowUp className={Styles.icon_Arrow} />
            ) : (
              <BsArrowDown className={Styles.icon_Arrow} />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardsOfPostsUser;
