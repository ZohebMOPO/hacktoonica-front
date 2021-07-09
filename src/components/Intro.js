import React from "react";
import "./styles.css";
function Intro() {
  return (
    <section class="colored-section" id="title">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="big-heading">
              Hacktoon is a web app which allows user to play anime themed games
              and chill or find their anime twin or even have a anime lover
              friend Anibot.
            </h1>
          </div>

          <div class="col-lg-6">
            <img
              class="title-image"
              src="https://i.postimg.cc/nV6c6VXH/anime.png"
              alt="anime-friend"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
