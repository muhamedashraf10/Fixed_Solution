import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// css module
import Styles from "./Navbar.module.css";

// icon
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const location = useLocation();

  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.title}>
        <NavLink to={"/"}>
          <h1>
            FIXED<span>solution</span>
          </h1>
        </NavLink>
      </div>
      <div className={Styles.link_Nav}>
        <ul className={showDropDown ? Styles.nav_list : Styles.nav_list_None}>
          <li>
            <NavLink
              to="/"
              className={location.pathname === "/" ? Styles.active : ""}
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
              className={location.pathname === "/posts" ? Styles.active : ""}

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
              className={location.pathname === "/about" ? Styles.active : ""}
              // style={({ isActive }) => {
              //   return { color: isActive ? "#f8633b" : "#93a4b6" };
              // }}
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className={Styles.hamburger_Menu}>
          <GiHamburgerMenu onClick={() => setShowDropDown(!showDropDown)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
