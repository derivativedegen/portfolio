import React from "react";
import me from "../images/me.png";
import "./playercard.css";

export default function PlayerCard(props) {
  const { onClick, name } = props;
  return (
    <div className="row justify-content-center pt-4 pb-4">
      <div className="playerborder pl-5 pr-5" id="MENU" onClick={onClick}>
        <img src={me} className="biopicture" alt="bio-pic" id="MENU" />
        <h3 className="textyellow textspaced pt-3" id="MENU">
          {name}
        </h3>
      </div>
    </div>
  );
}
