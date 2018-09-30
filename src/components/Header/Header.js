import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="subtitle">featuring the cast of AHS: Coven</div>
        <div className="scores">
            Score: {props.userScore}<br />
            High Score: {props.highScore} 
        </div>
        <div className="message">
            {props.message}
        </div>
    </div>
);

export default Header;