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
    <div className="App">
      <Navbar itemNames={["Who Are We?", "WarHacks"]} />
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
