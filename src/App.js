import React from 'react';
import './App.css'

import { CardSection, Footer, Header, WhatWarhacks, Testimony, CTA} from './containers';
import { Brand, Logo, NavbarItem, Register, Navbar} from './components';

const App = () => {
  return (
    <div className='App'>
      <Navbar itemNames={['Who Are We?', 'WarHacks']}/>
      <Header />
      <WhatWarhacks />
      <CardSection />
      <Testimony />
      <CTA />
      <Footer />
    </div>
  )
}

export default App