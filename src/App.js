import React from "react";
import Sky from "react-sky";
import lyrics from "./lyrics.json";
import "./App.css";

const App = () => {
  const randCardIndex = Math.floor(Math.random() * 10) + 1;

  return (
    <div>
      <div className="card-container">
        <img
          className="image-card"
          src={`/images/card${randCardIndex}.jpeg`}
          alt="Pretty card."
        />
      </div>
      <div className="card-container">
        <div className="lyrics-card">{lyrics[randCardIndex - 1]}</div>
      </div>
      <div className="card-container">
        <div className="final-card">
          {"   There is\n   only one\nin the world \n   like   "}
          <span className="fancy-font">you</span>
        </div>
      </div>
      <div className="background-container">
        <Sky
          images={{
            0: "/images/daisy1.svg",
            1: "/images/daisy2.svg",
            2: "/images/daisy3.svg"
          }}
          how={400}
          time={50}
          size={"80px"}
          background={"pink"}
        />
      </div>
    </div>
  );
};

export default App;
