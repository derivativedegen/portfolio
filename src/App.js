import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Menu from "./components/menu";
import About from "./pages/about";
import Start from "./pages/start";
import Projects from "./pages/projects";
import Connect from "./pages/connect";
import Player from "./pages/player";
import Bonus from "./pages/bonus";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { selectPage } from "./redux/data";

export default function App(props) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  return (
    <Router>
      <div className="App">
        <div className="col-12 pl-0 pr-0">
          {page !== "start" && page !== "player" && page !== "bonus" && (
            <Header />
          )}
        </div>

        <div className="col-12 pt-3">
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/player" component={Player} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/connect" component={Connect} />
            <Route path="/bonus" component={Bonus} />
            <Route path="*" component={Start} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
