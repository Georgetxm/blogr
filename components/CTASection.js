import React from "react";
import Nav from "./Nav";
import styles from "../styles/CTASection.module.css";

const CTASection = () => {
  return (
    <section className={`${styles["cta-section"]}`}>
      <Nav />
      <div className={`container`}>
        <h1 className={`${styles["cta-title"]} text-light`}>
          A modern publishing platform
        </h1>
        <p className={`${styles["cta-text"]} text-light`}>
          Grow your audience and build your online brand
        </p>
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
