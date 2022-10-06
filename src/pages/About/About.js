import React from "react";
import Welcome from "../../components/Welcome/Welcome";

// import Styles from "./About.module.css";

const About = () => {
  return (
    <section>
      <h5>Welcome To</h5>
      <h2>About Page</h2>
      <article className="container">
        <Welcome />
      </article>
    </section>
  );
};

export default About;
