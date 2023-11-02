import React from "react";
import "./header.css";
import { Register } from "../../components";

const Header = () => {
  return (
    <div className="header_container">
      <h3 className="header_surtitle">IEEE Concordia invites you to</h3>
      <h1 className="header_title">WARHACKS</h1>
      <h3 className="header_surtitle">On Feburary 18th, 2024</h3>
      <h3 className="header_subtitle">Learn how to build robots!</h3>
      <Register
        text="Register Now!"
        background="#63BAFF"
        margin="50px 0"
        href="https://forms.gle/3Uh1p2wazgBvAqw88"
      />
    </div>
  );
};

export default Header;
