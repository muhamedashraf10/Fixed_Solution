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
        <NavLink to="/">
          <h1>
            FIXED<span>solution</span>
          </h1>
        </NavLink>
      </div>
      <div className={Styles.navbar_content}>
        <ul
          className={
            showDropDown
              ? Styles.navbar_list_active
              : Styles.navbar_list_notActive
          }
        >
          <li>
            <NavLink
              to="/"
              className={location.pathname === "/" ? Styles.active : ""}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={location.pathname === "/contact" ? Styles.active : ""}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={location.pathname === "/about" ? Styles.active : ""}
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
