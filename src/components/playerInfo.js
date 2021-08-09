import React from "react";
import "./playerInfo.css";
import { Link } from "react-router-dom";

export default function PlayerInfo(props) {
  return (
    <div>
      <Link to="/player" style={{ textDecoration: "none" }}>
        <h2 className="playername textyellow textspaced">DEGEN</h2>
      </Link>
      <hr className="horizontalbreak mt-0 mb-2 mr-0 ml-0" />
      <h5 className="playerbio textblue textspaced">Blockchain Developer</h5>
      <h5 className="playerbio textblue textspaced">Player 1</h5>
    </div>
  );
}
