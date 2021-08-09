import React from "react";
import PlayerCard from "../components/playercard";
import { Link } from "react-router-dom";
import "./player.css";
import { selectPage, setPage } from "../redux/data";
import { useDispatch, useSelector } from "react-redux";

export default function Player(props) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  page !== "player" && dispatch(setPage("player"));

  return (
    <div className="col-xs-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 pt-5 mt-5">
      <div className="menubox justify-content-center shadow-lg mb-5">
        <h2 className="textyellow textspaced">
          <u>Player Select</u>
        </h2>
        <Link
          to="/menu"
          onClick={() => dispatch(setPage("menu"))}
          style={{ textDecoration: "none" }}
        >
          <PlayerCard name="DEGEN" />
        </Link>
        <hr className="navbreak" />

        <Link to="/start" onClick={() => dispatch(setPage("start"))}>
          <div className="nav-item textspaced">Restart</div>
        </Link>
      </div>
    </div>
  );
}
