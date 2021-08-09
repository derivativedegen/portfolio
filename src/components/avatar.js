import React from "react";
import "./avatar.css";
import avatar from "../images/avatar.jpg";

export default function Avatar(props) {
  return (
    <div className="avatar-container">
      <div className="row justify-content-center mt-0">
        <img src={avatar} className="avatar" alt="avatar" />
      </div>
      <div className="socialicons d-flex justify-content-center justify-content-around pt-2">
        <a
          href="https://github.com/derivativedegen"
          target="_blank"
          rel="noreferrer"
          className="socialicon"
        >
          <span className="icon-github"></span>
        </a>
        <a
          href="mailto:derivativedegen@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="socialicon"
        >
          <span className="icon-mail_outline"></span>
        </a>
        <a
          href="https://www.twitter.com/derivativedegen"
          target="_blank"
          rel="noreferrer"
          className="socialicon"
        >
          <span className="icon-twitter-square"></span>
        </a>
      </div>
    </div>
  );
}
