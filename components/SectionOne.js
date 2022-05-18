import Image from "next/image";
import React from "react";
import styles from "../styles/SectionOne.module.css";
import illustrationEditorMobile from "../images/illustration-editor-mobile.svg";
import illustrationEditorDesktop from "../images/illustration-editor-desktop.svg";

const SectionOne = ({ isBreakpoint }) => {
  return (
    <section className={`${styles["section-one-container"]} container`}>
      <h2 className={`${styles["section-one-title"]} text-dark`}>
        Designed for the future
      </h2>
      <div className={`${styles["section-one__content-container"]} flex`}>
        <div className={`${styles["section-one__content-image"]}`}>
          <Image
            className={`${styles["section-one__content-image-file"]}`}
            about={`illustration editor`}
            src={
              isBreakpoint
                ? illustrationEditorDesktop
                : illustrationEditorMobile
            }
            layout={`intrinsic`}
          />
        </div>
        <div className={`${styles["section-one__typography-container"]} flex`}>
          <div>
            <h3 className={`${styles["section-one-title"]} text-dark`}>
              Introducing an extensible editor
            </h3>
            <p className={`text-gray`}>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3 className={`${styles["section-one-title"]} text-dark`}>
              Robust Content Management
            </h3>
            <p className={`text-gray`}>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
