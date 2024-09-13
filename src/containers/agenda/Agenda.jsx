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
        08:00 AM: Registration + Breakfast <br />
        <div className="agenda_text_line"></div>
        08:30 AM: Opening Ceremony <br />
        <div className="agenda_text_line"></div>
        09:00 AM: Workshop #1 <br />
        <div className="agenda_text_line"></div>
        10:00 AM: Workshop #2 <br />
        <div className="agenda_text_line"></div>
        11:00 AM: Workshop #3 <br />
        <div className="agenda_text_line"></div>
        12:00 PM: Lunch <br />
        <div className="agenda_text_line"></div>
        01:00 PM: Workshop #4 <br />
        <div className="agenda_text_line"></div>
        02:00 PM: Hacking <br />
        <div className="agenda_text_line"></div>
        03:00 PM: Competition Starts <br />
        <div className="agenda_text_line"></div>
        05:00 PM: Dinner <br />
        <div className="agenda_text_line"></div>
        06:00 PM: Closing Ceremony <br />
        <div className="agenda_text_line"></div>
        6:30 PM: End <br />
      </div>
    </div>
  );
};

export default Agenda;
