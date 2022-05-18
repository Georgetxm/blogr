import Image from "next/image";
import React from "react";
import styles from "../styles/SectionTwo.module.css";
import illustrationPhones from "../images/illustration-phones.svg";

const SectionTwo = () => {
  return (
    <section className={`${styles["section-two-container"]} flex`}>
      <div className={`${styles["section-two__illustration-container"]}`}>
        <Image
          layout={`intrinsic`}
          alt={`phone illustration`}
          src={illustrationPhones}
        />
      </div>
      <div className={`${styles["section-two-typography__container"]} flex`}>
        <h1 className={`text-light`}>State of the Art Infrastructure</h1>
        <p className="text-light">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
