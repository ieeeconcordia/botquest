import React from "react";
import "./App.css";

import {
  CardSection,
  Footer,
  Header,
  WhatWarhacks,
  Testimony,
  CTA,
  Agenda,
} from "./containers";
import { Navbar } from "./components";
import Recap from "./containers/recap/Recap";

const App = () => {
  return (
    <div className="App" style={{ background: "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(/header_background.webp)" }}>
      <Navbar itemNames={["Who Are We?", "BotQuest"]} />
      <Header />
      <WhatWarhacks />
      <CardSection />
      <Agenda />
      <Testimony />
      <Recap />
      <CTA />
      <Footer />
      {/* <Slideshow /> */}
    </div>
  );
};

export default App;
