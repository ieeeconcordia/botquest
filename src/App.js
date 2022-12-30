import React from 'react';
import './App.css'

import { CardSection, Footer, Header, WhatWarhacks, Testimony, CTA, Agenda} from './containers';
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
    </div>
  )
}

export default App