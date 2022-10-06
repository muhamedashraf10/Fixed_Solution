// ------------------------------------ Another Code Whithout Use library , by used useHooks (useState) -----------------------------

import React, { useState } from "react";

// css module
import Styles from "./CardsOfPostsUser.module.css";

// icon
import { BsThreeDots, BsArrowUp, BsArrowDown } from "react-icons/bs";

const CardsOfPostsUser = ({ posts, user }) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <article className={Styles.posts}>
      <div
        className={isExpanded ? Styles.post : Styles.expanded}
        key={posts.id}
      >
        <div className={Styles.icon_Menu}>
          <BsThreeDots />
        </div>
        <div className={Styles.card_Content}>
          <img src={`../images/${user.id}.png`} alt="User Profile" />
          <h2>{user.username}</h2>
          <h3>{posts.title}</h3>
          <div
            className={
              isExpanded ? Styles.more_Card_Body : Styles.less_Card_Body
            }
          >
            <h4>{posts.body}</h4>
            <h5>{user.name}</h5>
            <h6>{user.email}</h6>
          </div>

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

// ------------ using library , react collapsed  , if use it , you should see file css , you will see comment------------------------

// import React from "react";

// // react collapsed -> https://www.npmjs.com/package/react-collapsed
// import useCollapse from "react-collapsed";

// // css module
// import Styles from "./CardsOfPostsUser.module.css";

// // icon
// import { BsThreeDots, BsArrowUp, BsArrowDown } from "react-icons/bs";

// const CardsOfPostsUser = ({ posts, user }) => {
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
//     duration: 800,
//     collapsedHeight: 1,
//     easing: "cubic-bezier(.12,.16,.18,.12)",
//     expandStyles: {
//       opacity: 0.4,
//     },
//     collapseStyles: {
//       opacity: 0.4,
//     },
//   });

//   return (
//     <article className={Styles.posts}>
//       <div className={Styles.post} key={posts.id}>
//         <div className={Styles.icon_Menu}>
//           <BsThreeDots />
//         </div>
//         <div className={Styles.card_Content}>
//           <img src={`../images/${user.id}.png`} alt="User Profile" />
//           <h2>{user.username}</h2>
//           <h3>{posts.title}</h3>
//           <div {...getCollapseProps()} className={Styles.more_Card_Body}>
//             <h4>{posts.body}</h4>
//             <h5>{user.name}</h5>
//             <h6>{user.email}</h6>
//           </div>

//           <button className={Styles.bttn} {...getToggleProps()}>
//             {isExpanded ? "Read Less" : "Read More"}
//             {isExpanded ? (
//               <BsArrowUp className={Styles.icon_Arrow} />
//             ) : (
//               <BsArrowDown className={Styles.icon_Arrow} />
//             )}
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default CardsOfPostsUser;
