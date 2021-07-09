import React from "react";
import "./styles.css";

function Game1() {
  return (
    <div class="game-zone-column col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3 style={{ textAlign: "center" }}>Game 1</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">Game-1</h2>
          <p>Play!</p>
          <p>Play!!</p>
          <p>Play!!!</p>
          <button
            class="w-100 btn btn-lg btn-block btn-outline-dark"
            type="button"
          >
            Play Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game1;
