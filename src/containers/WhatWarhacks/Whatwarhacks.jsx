import React from "react";
import "./whatwarhacks.css";

const WhatWarhacks = () => {
  return (
    <div className="wiw_container">
      <h1 className="wiw_card_detail_title">About Warhacks</h1>
      <div
        style={{ border: "1px solid #8D7365", width: "230px", height: "0px" }}
      ></div>
      <p className="wiw_card_detail_text">
        Warhacks is an introductory hardware Hackathon designed specifically for
        CEGEP students and First-year undergrads. Come spend the day with us,
        and you will get to build your first robot from scratch.
      </p>
    </div>
  );
};

export default WhatWarhacks;
