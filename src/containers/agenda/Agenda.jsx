import React from "react";
import "./agenda.css";

const Agenda = () => {
  return (
    <div className="agenda_container">
      <h1 className="agenda_title">Agenda</h1>
      <div
        style={{ border: "1px solid #8D7365", width: "230px", height: "0px" }}
      ></div>

      <div className="agenda_text">
        9 AM: Registration + Breakfast <br />
        <div className="agenda_text_line"></div>
        9:30 AM: Opening Ceremony <br />
        <div className="agenda_text_line"></div>
        10 AM: Tutorial <br />
        <div className="agenda_text_line"></div>
        12:15 PM: Lunch <br />
        <div className="agenda_text_line"></div>
        12:45 PM: Explaining the rules <br />
        <div className="agenda_text_line"></div>
        1 PM: Hacking <br />
        <div className="agenda_text_line"></div>
        3 PM: Snack break <br />
        <div className="agenda_text_line"></div>
        5:30 PM: Dinner <br />
        <div className="agenda_text_line"></div>
        6:30 PM: Competition <br />
        <div className="agenda_text_line"></div>
        8:30 PM: Closing ceremony
      </div>
    </div>
  );
};

export default Agenda;
