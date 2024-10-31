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
        08:00 AM: Registration <br />
        <div className="agenda_text_line"></div>
        08:30 AM: Opening Ceremony <br />
        <div className="agenda_text_line"></div>
        09:00 AM: General Workshop #1 <br />
        <div className="agenda_text_line"></div>
        09:30 AM: Challenge #1 + Challenge Workshop #1 <br />
        <div className="agenda_text_line"></div>
        12:00 PM: Judging Challenge #1 <br />
        <div className="agenda_text_line"></div>
        12:30 PM: Lunch <br />
        <div className="agenda_text_line"></div>
        01:00 PM: General Workshop #2 <br />
        <div className="agenda_text_line"></div>
        01:30 PM: Challenge #2 + Challenge Workshop #2 <br />
        <div className="agenda_text_line"></div>
        04:00 PM: Judging Challenge #2 <br />
        <div className="agenda_text_line"></div>
        04:30 PM: Autodesk Activity <br />
        <div className="agenda_text_line"></div>
        05:00 PM: Networking <br />
        <div className="agenda_text_line"></div>
        05:30 PM: Closing Ceremony <br />
        <div className="agenda_text_line"></div>
        06:00 PM: End <br />
      </div>
    </div>
  );
};

export default Agenda;
