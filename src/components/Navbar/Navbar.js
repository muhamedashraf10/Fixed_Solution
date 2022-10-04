import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const data = useParams();
  console.log(data);
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.title}>
        <Link to={"/"}>
          <h1>
            FIXED<span>solution</span>
          </h1>
        </Link>
      </div>
      <div className={Styles.linkNav}>
        <ul className={Styles.navlist}>
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) => {
                return { color: isActive ? "#f8633b" : "#93a4b6" };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              style={({ isActive }) => {
                return { color: isActive ? "#f8633b" : "#93a4b6" };
              }}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return { color: isActive ? "#f8633b" : "#93a4b6" };
              }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
