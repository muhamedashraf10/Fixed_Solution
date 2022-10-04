import React, { useState } from "react";
import Styles from "./CardsOfPostsUser.module.css";
import { BsThreeDots } from "react-icons/bs";
import useCollapse from "react-collapsed";

const CardsOfPostsUser = ({ posts, user }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <article className={Styles.posts}>
      <div className={Styles.post} key={posts.id}>
        <div className={Styles.icon}>
          <BsThreeDots />
        </div>
        <div className={Styles.cardContent}>
          <img src={`../images/${user.id}.png`} alt="User Profile" />
          <h2 className={Styles.userName}>{user.username}</h2>
          <h3 className={Styles.title}>{posts.title}</h3>
          <div {...getCollapseProps()} className={Styles.moreCardBody}>
            <h4 className={Styles.desc}>{posts.body}</h4>
            <h5>{user.name}</h5>
            <h6>{user.email}</h6>
          </div>
          <button
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
            className={Styles.bttn}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardsOfPostsUser;
