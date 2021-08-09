import React from "react";
import "./levelInfo.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setPage } from "../redux/data";

export default function LevelInfo(props) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  return (
    <div className="gameinfo pt-2 pb-2">
      <div className="text-center">
        <h4 className="textyellow textspaced">Current Level</h4>
        <h3 className="textblue textspaced">{page}</h3>
        <hr className="navbreak" />
        <Link to="/menu">
          <h5
            onClick={() => dispatch(setPage("menu"))}
            className="return text-white textspaced blink_me_slow"
          >
            Return To Menu
          </h5>
        </Link>
      </div>
    </div>
  );
}
