import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
