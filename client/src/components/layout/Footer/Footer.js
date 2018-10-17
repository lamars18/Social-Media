import React from "react";
import "./Footer.css";

const Footer = (props) => (
    <footer id="main-footer" className="text-center py-2">
        <div className="col">
            <div className="app-color-1">&copy;<span id="year"> {props.year}</span> {props.orgName}</div>
        </div>
    </footer>
);

export default Footer;
