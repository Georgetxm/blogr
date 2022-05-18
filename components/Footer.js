import Image from "next/image";
import React from "react";
import logo from "../images/logo.svg";
import Attribution from "./Attribution";
import styles from "../styles/Footer.module.css";
import { Slide } from "react-reveal";

const Footer = () => {
  return (
    <Slide bottom>
      <footer className={`${styles["footer-container"]} flex`}>
        <div className={`${styles["footer__image-container"]}`}>
          <Image alt="footer logo" src={logo} layout={`intrinsic`} />
        </div>
        <div>
          <h3 className="text-light">Product</h3>
          <ul className={`${styles["footer__list"]}`}>
            <li className={`${styles["footer__list-items"]}`}>Overview</li>
            <li className={`${styles["footer__list-items"]}`}>Pricing</li>
            <li className={`${styles["footer__list-items"]}`}>Marketplace</li>
            <li className={`${styles["footer__list-items"]}`}>Features</li>
            <li className={`${styles["footer__list-items"]}`}>Integrations</li>
          </ul>
        </div>
        <div>
          <h3 className="text-light">Company</h3>
          <ul className={`${styles["footer__list"]}`}>
            <li className={`${styles["footer__list-items"]}`}>About</li>
            <li className={`${styles["footer__list-items"]}`}>Team</li>
            <li className={`${styles["footer__list-items"]}`}>Blog</li>
            <li className={`${styles["footer__list-items"]}`}>Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-light">Connect</h3>
          <ul className={`${styles["footer__list"]}`}>
            <li className={`${styles["footer__list-items"]}`}>Contact</li>
            <li className={`${styles["footer__list-items"]}`}>Newsletter</li>
            <li className={`${styles["footer__list-items"]}`}>LinkedIn</li>
          </ul>
        </div>
        <Attribution />
      </footer>
    </Slide>
  );
};

export default Footer;
