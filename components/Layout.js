import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
