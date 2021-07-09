import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Anime from "./pages/Anime";
import Error from "./pages/Error";
import Game from "./pages/Game";
function Router() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/twin" exact component={Anime} />
            <Route path="/game" exact component={Game} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Router;
