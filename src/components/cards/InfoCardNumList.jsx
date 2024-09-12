import React from "react";
import "./infocard.css";

const InfoCardNumList = (props) => {
  return (
    <div className="infocard_container">
      <div className="infocard_image">
        <img
          loading="lazy"
          src={props.imagesrc}
          alt="CardS"
          className="image"
          style={{ verticalAlign: "bottom" }}
        />
      </div>

      <div className="infocard_details">
        <div className="infocard_title">It's as easy as 1-2-3</div>
        <div className="infocard_list">
          <ol>
            <li>Fill the registration form to reserve your place.</li>
            <li>Share with friends if you want to.</li>
            <li>
              Come to Concordia on November 15th, ready to learn and have a good
              time.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default InfoCardNumList;
