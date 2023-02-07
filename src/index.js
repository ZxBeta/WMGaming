import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
import GameArt from "./views/game-art";
import AboutUs from "./views/about-us";
import Outstaffing from "./views/outstaffing";
import GameDevelopment from "./views/game-development";
import Home from "./views/home";
import VirturalGame from "./views/virtural-game";

const App = () => {
  return (
    <Router>
      <div>
        <Route component={GameArt} exact path="/game-art" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Outstaffing} exact path="/outstaffing" />
        <Route component={GameDevelopment} exact path="/game-development" />
        <Route component={Home} exact path="/" />
        <Route component={VirturalGame} exact path="/virtural-game" />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
