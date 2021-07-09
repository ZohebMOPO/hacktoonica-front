import React from "react";
import "./styles.css";
import Game1 from "./Game1";
import Game2 from "./Game2";
import Game3 from "./Game3";

function GameZone() {
  return (
    <div>
      <section class="white-section" id="game-zone">
        <div className="row">
          <Game1 />
          <Game2 />
          <Game3 />
        </div>
      </section>
    </div>
  );
}

export default GameZone;
