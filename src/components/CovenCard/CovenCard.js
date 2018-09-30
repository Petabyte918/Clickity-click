import React from "react";
import "./CovenCard.css";

const CovenCard = props => (
  <div className="card" onClick={ () => props.clickCounter(props.id) }>
      <img alt={props.name} src={props.image} />
  </div>
);

export default CovenCard;
