import React from "react";
import "./header.css";
import { Register } from "../../components";
//
const Header = () => {
  return (
    <div className="header_container">
      <h3 className="header_surtitle">IEEE Concordia invites you to</h3>
      <h1 className="header_title">BOTQUEST</h1>
      <h3 className="header_surtitle">On November 15th, 2024</h3>
      <h3 className="header_subtitle">Learn how to build robots!</h3>
      <Register
        text="Register Now!"
        background="#63BAFF"
        margin="50px 0"
        href="https://forms.gle/k3ceriUEZ3Gczz7C6"
      />
    </div>
  );
};

export default Header;
