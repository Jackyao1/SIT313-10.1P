import React from "react";
import './CSS/Email.css';

const emailbutton = (props) => {
    return <button className="emailbutton" type={props.type} onClick={props.onClick}>{props.text}</button>
}
export default emailbutton;