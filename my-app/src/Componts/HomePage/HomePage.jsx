import React from "react";
import "./HomePage.css";
function HomePage() {
  return (
    <div className="container">
      <div className="text-Explore">
        <span className="text-First-line"> So, you want to travel to</span>
        <span className="Space">Space</span>
        Let’s face it; if you want to go to space, you might as well <br/>
        <span>genuinely go to outer space and not hover kind of on the</span>
        edge of it. Well sit back, and relax because we’ll give you
        <span>a truly out of this world experience!</span>
      </div>
      <div className="btn-Explore">
        <h1>Explore</h1>
      </div>
    </div>
  );
}

export default HomePage;
