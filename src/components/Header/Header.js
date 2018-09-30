import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="subtitle">featuring the cast of AHS: Coven</div>
        <div className="score">
            Score:
            {props.userScore}   
        </div>
        <div className="highscore">
            High Score: {props.highScore}
        </div>
    </div>
);

export default Header;