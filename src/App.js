import React from "react";
import Sky from "react-sky";

import "./App.css";

const App = () => {
  const randCardIndex = Math.floor(Math.random() * 10) + 1;

  return (
    <div>
      <div className="card-container">
        <img className="card" src={`/images/card${randCardIndex}.jpeg`} alt="Pretty card." />
      </div>
      <Sky
        images={{
          0: "/images/daisy1.svg",
          1: "/images/daisy2.svg",
          2: "/images/daisy3.svg"
        }}  
        how={100}
        time={50}
        background={"pink"}
      />
    </div>
  );
};

export default App;
