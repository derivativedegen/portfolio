import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPage, setPage } from "../redux/data";
import "./menu.css";

export default function Menu(props) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  page !== "menu" && dispatch(setPage("menu"));

  return (
    <div className="col-xs-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
      <div className="menubox justify-content-center shadow-lg mb-5">
        <h2 className="textyellow textspaced">
          <u>Level Select</u>
        </h2>

        <ul className="navbar-nav">
          <Link to="/about" onClick={() => dispatch(setPage("about"))}>
            <li className="nav-item textspaced">About</li>
          </Link>

          <Link to="/projects">
            <li
              className="nav-item textspaced"
              onClick={() => dispatch(setPage("projects"))}
            >
              Projects
            </li>
          </Link>

          <Link to="/connect">
            <li
              className="nav-item textspaced"
              onClick={() => dispatch(setPage("connect"))}
            >
              Connect
            </li>
          </Link>

          <Link to="/bonus">
            <li
              className="nav-item textspaced"
              onClick={() => dispatch(setPage("bonus"))}
            >
              Bonus
            </li>
          </Link>

          <hr className="navbreak" />

          <Link to="/">
            <li
              className="nav-item textspaced"
              onClick={() => dispatch(setPage("start"))}
            >
              Restart
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
