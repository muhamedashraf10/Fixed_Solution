import React from "react";
import { useNavigate } from "react-router-dom";

// css module
import Styles from "./CardsOfUsers.module.css";

// import icon
import { HiMenuAlt1 } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { BsFillPhoneFill, BsFillHouseFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const CardsOfUsers = ({ users }) => {
  const navigate = useNavigate();

  return (
    <article className={`${Styles.cards} container`}>
      <div className={Styles.card}>
        <div className={Styles.contentInfo}>
          <div className={Styles.icons}>
            <HiMenuAlt1 className={Styles.menu} />
            <AiFillSetting className={Styles.setting} />
          </div>
          <img src={`./images/${users.id}.png`} alt="Users Profile" />
          <h3>{users.name}</h3>
          <p>{users.username}</p>
        </div>
        <button
          onClick={() => navigate(`/post/${users.id}`)}
          className={Styles.bttn}
        >
          POSTS
        </button>
        <div className={Styles.cardFooter}>
          <p>
            <BsFillPhoneFill className={Styles.icon} /> {users.phone}
          </p>
          <p>
            <MdEmail className={Styles.icon} /> {users.email}
          </p>
          <p>
            <GiPositionMarker className={Styles.icon} />
            {`${users.address.street} , ${users.address.city}`}
          </p>
          <p>
            <BsFillHouseFill className={Styles.icon} /> {users.company.name}
          </p>
          <a href={`http://${users.website}`} target="blank">
            <FaExternalLinkSquareAlt className={Styles.icon} /> {users.website}
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardsOfUsers;
