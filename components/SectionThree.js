import Image from "next/image";
import React from "react";
import styles from "../styles/SectionThree.module.css";
import illustrationLaptopMobile from "../images/illustration-laptop-mobile.svg";
import illustrationLaptopDesktop from "../images/illustration-laptop-desktop.svg";
import { Fade } from "react-reveal";

const SectionThree = ({ isBreakpoint }) => {
  return (
    <section className={`${styles["section-three-container"]} flex container`}>
      <Fade left>
        <div className={`${styles["section-three__illustration-container"]}`}>
          <Image
            alt={`laptop illustration`}
            layout={`intrinsic`}
            src={
              isBreakpoint
                ? illustrationLaptopDesktop
                : illustrationLaptopMobile
            }
          />
        </div>
      </Fade>
      <Fade right opposite={true}>
        <div className={`${styles["section-three__typography-container"]}`}>
          <div>
            <h3 className={`text-dark`}>Free, open, simple</h3>
            <p className={`text-gray`}>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div>
            <h3 className={`text-dark`}>Powerful tooling</h3>
            <p className={`text-gray`}>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default SectionThree;
