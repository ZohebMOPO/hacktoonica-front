import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Anime from "./pages/Anime";
import Error from "./pages/Error";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Toonify from "./pages/Toonify";
import Toonified from "./pages/Toonified";
import Search from "./pages/Search";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/twin" exact component={Anime} />
            <Route path="/game" exact component={Game} />
            <Route path="/toonify" exact component={Toonify} />
            <Route path="/toonified" exact component={Toonified} />
            <Route path="/query" exact component={Search} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Router;
