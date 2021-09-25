import React, { useState } from "react";
import "./bonus.css";
import Music from "../components/music";
import { useDispatch, useSelector } from "react-redux";
import { selectPlaying, setPage } from "../redux/data";
import { Link } from "react-router-dom";

export default function Bonus(props) {
  const dispatch = useDispatch();
  const playing = useSelector(selectPlaying);

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <Link to="/menu">
          <button
            onClick={() => dispatch(setPage("menu"))}
            className="btn-site pl-5 pr-5 textspaced btn-larger"
          >
            MENU
          </button>
        </Link>
      </div>

      {/* <div className="row justify-content-center mt-3">
        <Music />
      </div> */}

      {playing ? (
        <div className="text-center textpink textspaced">
          <h4>Song: "Midas Touch"</h4>
          <h4>Artist: Shammy</h4>
        </div>
      ) : null}

      <iframe
        src="https://supermarioemulator.com/mario.php"
        frameborder="0"
        className="game d-flex flex-row justify-content-center mt-5 col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2"
      ></iframe>

      <div className="d-flex flew-row justify-content-center mt-5 pt-5">
        <a href="https://gibmoney.netlify.app" target="_blank">
          <h1 className="textwhite textspaced">Pls... Gib Money.</h1>
        </a>
      </div>
    </div>
  );
}
