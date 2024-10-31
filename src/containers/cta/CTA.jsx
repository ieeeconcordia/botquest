import React from "react";
import "./cta.css";
import { Register } from "../../components";

const CTA = () => {
  return (
    <div className="cta_container">
      <div className="cta_main">
        <h2 className="cta_main_title">Hurry up!</h2>
        <p className="cta_main_text">Places are limited</p>
        <Register
          text="Register Now!"
          background="#63BAFF"
          margin="10px"
          href="https://forms.gle/k3ceriUEZ3Gczz7C6"
        />
      </div>

      <div
        style={{
          width: "50%",
          height: "0",
          border: "1px solid rgba(240, 240, 241, 0.7)",
        }}
      ></div>

      <div className="cta_secondary">
        <p className="cta_main_text">
          Challenges will be done in teams of 3 or 4. You can invite your
          friends or we can team you up.
        </p>
        <h2 className="cta_secondary_call">Invite your friends</h2>
      </div>

      <div
        style={{
          width: "50%",
          height: "0",
          border: "1px solid rgba(240, 240, 241, 0.7)",
        }}
      ></div>

      <div className="cta_secondary">
        <p className="cta_main_text">
          You can also check out previous Warhacks below!
        </p>
        <Register
          text="Previous Warhacks"
          background="#C2CCD6"
          color="#000000"
          boxShadow="none"
          href="https://www.facebook.com/media/set/?set=a.637496271715785&type=3"
          margin="10px"
        />
        {/* <a className='cta_secondary_call' href='https://www.facebook.com/media/set/?set=a.2157921424286586&type=3'>Previous Warhacks</a> */}
      </div>
    </div>
  );
};

export default CTA;
