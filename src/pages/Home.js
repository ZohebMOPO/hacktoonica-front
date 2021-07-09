import React from "react";
import Navbar from "../components/Navbar";
import GameZone from "../components/GameZone";
import Intro from "../components/Intro";
import ATakes from "../components/ATakes";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <GameZone />
      <ATakes />
      <Footer />
    </div>
  );
}

export default Home;
