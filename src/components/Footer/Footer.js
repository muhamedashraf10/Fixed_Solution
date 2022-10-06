import React from "react";
import { Link } from "react-router-dom";

// css module
import Styles from "./Footer.module.css";

// icon
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram, FiGithub, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <Link to="/" className={Styles.footer_logo}>
        FIXED<span>solution</span>
      </Link>

      <ul className={Styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="https://my-portfolio-neon-six.vercel.app/" target="blank">
            Portfolio
          </a>
        </li>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/notfound">Not Found</Link>
        </li>
      </ul>
      <div className={Styles.footer_social}>
        <a href="https://www.facebook.com/elmagik.toshka" target="blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/__muhamedashraf/" target="blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/muhamed-ashraf-052a64242/"
          target="blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/muhamedashraf10" target="blank">
          <FiGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCbK_dOMfj1Rbd92BSVKG-Hg"
          target="blank"
        >
          <FiYoutube />
        </a>
      </div>
      <div className={Styles.copy}>
        <small>&copy; FIXEDsolution. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
