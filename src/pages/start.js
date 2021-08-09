import React from "react";
import start from "../images/start.jpg";
import { Link } from "react-router-dom";
import "./start.css";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/data";

export default function Start(props) {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 pt-5 mt-5 text-center">
        <Link to="/player" onClick={() => dispatch(setPage("player"))}>
          <img src={start} className="startimage" alt="start" />
          <p className="starttext blink_me textspaced">START GAME</p>
        </Link>
      </div>
    </div>
  );
}
