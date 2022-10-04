import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const data = useParams();
  console.log(data);
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.title}>
        <NavLink to={"/"}>
          <h1>
            FIXED<span>solution</span>
          </h1>
        </NavLink>
      </div>
      <div className={Styles.linkNav}>
        <ul className={Styles.navlist}>
          <li>
            <NavLink
              exact
              activeClassName={Styles.active}
              to="/"
              // style={({ isActive }) => {
              //   return { color: isActive ? "#f8633b" : "#93a4b6" };
              // }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              activeClassName={Styles.active}

              // style={({ isActive }) => {
              //   return { color: isActive ? "#f8633b" : "#93a4b6" };
              // }}
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName={Styles.active}

              // style={({ isActive }) => {
              //   return { color: isActive ? "#f8633b" : "#93a4b6" };
              // }}
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
