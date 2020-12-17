import React from "react";
import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer";
import "./Layout.scss";
function Layout(props) {
  return (
    <div className="wp__divPage">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
