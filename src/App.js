import React from 'react';
import './App.css'

import { CardSection, Footer, Header, WhatWarhacks, Testimony, CTA, Agenda, Slideshow} from './containers';
import {Navbar} from './components';

const App = () => {
  return (
    <div className='App'>
      <Navbar itemNames={['Who Are We?', 'WarHacks']}/>
      <Header />
      <WhatWarhacks />
      <CardSection />
      <Agenda />
      <Testimony />
      <CTA />
      <Footer />
      {/* <Slideshow /> */}
    </div>
  )
}

export default App