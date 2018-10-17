import React from "react";
import "./BtnRound.css";

const BtnRound = props => (

  <button
    // onClick={props.onClick}
    className={`card-btn app-border-color-1 bg-white app-color-1 ${props["data-value"]}`}
    title={props.title}
    // {...props}
  >
    <i className={props.icon} aria-hidden="true" />
  </button>
);

export default BtnRound;
