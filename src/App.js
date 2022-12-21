import React from 'react';
import './App.css'

import { Features, Footer, Header, WhatWarhacks} from './containers';
import { Brand, Logo, NavbarItem, Register, Navbar} from './components';

const App = () => {
  return (
    <div className='App'>
      <Navbar itemNames={['Who Are We?', 'WarHacks']}/>
      
      {/* <div>
        
        <Header />
      </div>
      <Brand />
      <WhatWarhacks />
      <Features />
      <Footer /> */}
    </div>
  )
}

export default App