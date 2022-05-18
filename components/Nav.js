import Image from "next/image";
import React, { useState, useCallback, useEffect } from "react";
import logo from "../images/logo.svg";
import Link from "next/link";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";
import styles from "../styles/Nav.module.css";
import redArrow from "../images/icon-arrow-dark.svg";
import lightarrow from "../images/icon-arrow-light.svg";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showNestedList, setShowNestedList] = useState(false);
  const [clickedNestedListIndex, setClickedNestedListIndex] = useState(null);

  let isBreakPoint = useMediaQuery(1024);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  useEffect(() => {
    const mobileNav = document.getElementById("primary-navigation");
    if (isBreakPoint) {
      setShowMobileNav(false);
      setShowNestedList(false);
      setClickedNestedListIndex(null);
      mobileNav.style.display = "flex";
    }
    if (!isBreakPoint) {
      mobileNav.style.display = "none";
    }
  }, [isBreakPoint]);

  useEffect(() => {
    const mobileNav = document.getElementById("primary-navigation");
    if (isBreakPoint) {
      mobileNav.style.display = "flex";
    }
    if (!isBreakPoint) {
      if (showMobileNav) {
        mobileNav.style.display = "block";
      } else {
        mobileNav.style.display = "none";
      }
    }
  }, [showMobileNav]);

  const toggleNestList = (index) => {
    if (index !== null) {
      if (index === clickedNestedListIndex) {
        setClickedNestedListIndex(null);
        setShowNestedList(false);
      } else {
        setClickedNestedListIndex(index);
        setShowNestedList(!showNestedList);
      }
    }
  };

  useEffect(() => {
    let nestedLists = document.getElementsByClassName(
      `${styles["nav__nested-list"]}`
    );
    let redArrows = document.getElementsByClassName(
      `${styles["nav__dropdown-icon-container"]}`
    );
    for (let i = 0; i < nestedLists.length; i++) {
      nestedLists[i].style.display = "none";
      redArrows[i].children[0].style.transform = null;
    }
    if (clickedNestedListIndex != null) {
      nestedLists[clickedNestedListIndex].style.display = "block";
      redArrows[clickedNestedListIndex].children[0].style.transform =
        "rotate(180deg)";
    }
  }, [showNestedList, clickedNestedListIndex]);

  return (
    <header className={`${styles["primary-header"]} flex container`}>
      <div>
        <Image about={`logo`} src={logo} layout={`intrinsic`} />
      </div>
      <nav
        className={`${styles["primary-navigation"]}`}
        id="primary-navigation"
      >
        <ul className={`${styles["nav__list"]} flex`}>
          <li
            className={`${styles["nav__item"]}`}
            onClick={() => toggleNestList(0)}
          >
            Product
            <span className={`${styles["nav__dropdown-icon-container"]}`}>
              <Image
                className={`${styles["nav__dropdown-icon"]}`}
                src={isBreakPoint ? lightarrow : redArrow}
                alt={`dropdown`}
                layout={`intrinsic`}
              />
            </span>
            <ul className={`${styles["nav__nested-list"]}`}>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Overview</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Pricing</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Marketplace</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Features</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Integrations</Link>
              </li>
            </ul>
          </li>
          <li
            className={`${styles["nav__item"]}`}
            onClick={() => toggleNestList(1)}
          >
            Company
            <span className={`${styles["nav__dropdown-icon-container"]}`}>
              <Image
                className={`${styles["nav__dropdown-icon"]}`}
                src={isBreakPoint ? lightarrow : redArrow}
                alt={`dropdown`}
                layout={`intrinsic`}
              />
            </span>
            <ul className={`${styles["nav__nested-list"]}`}>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>About</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Team</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Blog</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Careers</Link>
              </li>
            </ul>
          </li>
          <li
            className={`${styles["nav__item"]}`}
            onClick={() => toggleNestList(2)}
          >
            Connect
            <span className={`${styles["nav__dropdown-icon-container"]}`}>
              <Image
                className={`${styles["nav__dropdown-icon"]}`}
                src={isBreakPoint ? lightarrow : redArrow}
                alt={`dropdown`}
                layout={`intrinsic`}
              />
            </span>
            <ul className={`${styles["nav__nested-list"]}`}>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Contact</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>Newsletter</Link>
              </li>
              <li className={`${styles["nav__nested-item"]}`}>
                <Link href={`/`}>LinkedIn</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className={`${styles["nav__button-container"]} flex`}>
          <button className={`${styles["login-button"]}`}>Login</button>
          <button className={`${styles["sign-up-button"]}`}>Sign Up</button>
        </div>
      </nav>
      {!isBreakPoint && (
        <div>
          <Image
            onClick={toggleMobileNav}
            about={`logo`}
            src={showMobileNav ? closeIcon : hamburgerIcon}
            layout={`intrinsic`}
          />
        </div>
      )}
    </header>
  );
};

export default Nav;
