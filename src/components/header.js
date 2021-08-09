import React, { Component } from "react";
import "./header.css";
import "./icomoon.css";
import LevelInfo from "./levelInfo";
import Avatar from "./avatar";
import PlayerInfo from "./playerInfo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPage } from "../redux/data";

export default function Header(props) {
  const page = useSelector(selectPage);

  return (
    <div className="row">
      <div className="col-xs-12 col-xl-6">
        <div className="row headerbox shadow-lg">
          <div className="col-8 col-sm-8 pl-2 ml-0">
            <PlayerInfo />
          </div>
          <div className="col-4 col-sm-4 pt-0 pl-0 pr-0 mr-0 ml-0">
            <Avatar />
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-xl-3 offset-xl-3">
        {page !== "menu" && <LevelInfo />}
      </div>
    </div>
  );
}
