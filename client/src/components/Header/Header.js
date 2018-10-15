import React from "react";
import "./Header.css";

const Header = (props) => (
  <header id="page-header" className="jumbotron text-center mb-0 p-3">
    <h1 className="display-3"><i className={props.titleicon}></i> {props.title}</h1>
    { props.message ? <div className="message">{props.message}</div> : null}
  </header>
);

export default Header;