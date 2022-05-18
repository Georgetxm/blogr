import React from "react";
import Nav from "./Nav";
import styles from "../styles/CTASection.module.css";
import Fade from "react-reveal";

const CTASection = () => {
  return (
    <section className={`${styles["cta-section"]}`}>
      <Nav />
      <div className={`container`}>
        <Fade right>
          <h1 className={`${styles["cta-title"]} text-light`}>
            A modern publishing platform
          </h1>
        </Fade>
        <Fade left>
          <p className={`${styles["cta-text"]} text-light`}>
            Grow your audience and build your online brand
          </p>
        </Fade>
        <div className={`${styles["cta-button-container"]} flex`}>
          <button
            className={`${styles["cta-button"]} ${styles["cta-button-light"]} flex`}
          >
            Start for Free
          </button>
          <button
            className={`${styles["cta-button"]} ${styles["cta-button-primary"]} flex`}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
