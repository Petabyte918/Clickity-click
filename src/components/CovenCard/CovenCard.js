import React from "react";
import "./CovenCard.css";

const CovenCard = props => (

  // Upon clicking on the image, grab the id of the image
  <div className="card" onClick={ () => props.clickCounter(props.id) }>
      <img alt={props.name} src={props.image} />
  </div>
);

export default CovenCard;
