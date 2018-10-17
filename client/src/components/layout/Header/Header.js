import React from "react";
import "./Header.css";

const Header = (props) => (
  <header id="page-header" className="text-center mb-0 p-3 app-bg-color-4">
    <h3 className="display-5">
      <i className="fas fa-rocket app-color-3"></i> {props.title}
    </h3>
    { props.message ? <div className="message">{props.message}</div> : null}
  </header>
);

export default Header;

