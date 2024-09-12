import React from "react";
import "./testimony.css";
import Lina from "../../assets/img/Lina.JPG";
import Abdulrahman from "../../assets/img/Abdulrahman.png";
import Elsa from "../../assets/img/Elsa.png";

const Testimony = () => {
  return (
    <div className="testimony_container">
      <h2 className="testimony_title">A word from a past participant</h2>
      <div
        style={{ width: "230px", height: "0", border: "1px solid #F0F0F1" }}
      ></div>

      <div className="testimony_text_container">
        <p className="testimony_text">
          " Warhacks is a great competition for beginners in robotics, or for
          anyone who wishes to discover their interests through hands-on
          experience. I was introduced to Warhacks in CEGEP and it's what led me
          to pursue a program in Engineering. If you're interested in robotics,
          try it out! "
        </p>
        <div className="testimony_witness">
          <img
            src={Lina}
            alt="Testimony person"
            style={{
              maxWidth: "175px",
              height: "auto",
              borderRadius: "130px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          ></img>
          <p className="testimony_witness_text">- Lina</p>
        </div>
      </div>

      <div className="testimony_text_container">
        <p className="testimony_text">
          " Thrilled to share that my team Amaia J. Descroizette and Elsa
          Rufenacht and I won 3rd place at Warhacks, organized by IEEE
          Concordia! Our challenge: build a maze-navigating robot 🚀. As a
          first-timer in robotics competitions, the experience was incredibly
          enlightening. "
        </p>
        <div className="testimony_witness">
          <img
            src={Abdulrahman}
            alt="Testimony person"
            style={{
              maxWidth: "175px",
              height: "auto",
              borderRadius: "130px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          ></img>
          <p className="testimony_witness_text">- Abdulrahman</p>
        </div>
      </div>

      <div className="testimony_text_container">
        <p className="testimony_text">
          " It was an insightful experience working with Arduino to create a
          path-following robot using light sensors. I am proud to share that our
          robot won the first challenge, completing the circuit in a
          record-breaking 6.7 seconds! This competition allowed us to combine
          time management, teamwork, and programming skills to solve challenging
          and fun problems. "
        </p>
        <div className="testimony_witness">
          <img
            src={Elsa}
            alt="Testimony person"
            style={{
              maxWidth: "175px",
              height: "auto",
              borderRadius: "130px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          ></img>
          <p className="testimony_witness_text">- Elsa</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
