import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="subtitle">featuring the cast of AHS: Coven</div>
        <div className="score">
            Score:
            {props.score}   
        </div>
        <div className="highscore">
            High Score: {props.highscore}
        </div>
    </div>
);

export default Header;