import React from "react";
import { useDispatch, useSelector } from "react-redux";
import me from "../images/me.png";
import { selectPage, setPage } from "../redux/data";
import "./about.css";

export default function About(props) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  page !== "about" && dispatch(setPage("about"));

  return (
    <div className="col-xs-12 col-xl-8 offset-xl-2">
      <div className="pagebox pt-4 pb-4 shadow-lg">
        <div className="row justify-content-center col-12 text-white pr-0 pl-0 ml-0 mr-0">
          <div className="col-12 col-md-10 col-lg-6 pt-3 pl-0 pr-0">
            <div className="row justify-content-center">
              <div className="pb-3">
                <img src={me} className="biopicture" alt="bio-pic" />
              </div>

              <div className="pl-3">
                <h3 className="textyellow textspaced">
                  <u>Player Info</u>
                </h3>
                <ul className="no-bullets raleway pl-0">
                  <li>Derivative Degen</li>
                  <li>Blockchain Developer</li>
                </ul>
              </div>
            </div>

            <p className="raleway text-center col-xs-12 col-xl-10 offset-xl-1 pt-2 pl-1 pr-1">
              Degen is a Front-End Blockhain Developer that has built numerous
              decentralized and progressive web applications, ranging from
              crypto hedge funds to NFT marketplaces, games, and minting.
              <br />
              <br />
              Some of his most used technologies are React / Redux, React Hooks,
              Web3 and Ethers.js, IPFS, Node.js, JavaScript, Async / Await
              Promises, REST APIs, GraphQL, Unity / WebGL, Bootstrap, CSS and
              HTML.
            </p>
          </div>

          <div className="col-12 col-md-10 col-lg-6 pt-3 pl-2 pr-2">
            <h3 className="textblue textspaced">
              <u>Player Brief</u>
            </h3>
            <ul className="raleway pb-2">
              <li className="brief-item">Makes dope apps.</li>
              <li className="brief-item">Has no business trading.</li>
              <li className="brief-item">Uses degen leverage.</li>
              <li className="brief-item">Left with nothing.</li>
              <li className="brief-item">Started discord group.</li>
              <li className="brief-item">Paid course next?</li>
            </ul>
            <div className="row pr-0 ml-0 pt-4">
              <h4 className="textpink textspaced pr-2">Power Ups: </h4>
              <h5 className="text-white raleway smallheader pt-1">
                Coffee & Substances
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
