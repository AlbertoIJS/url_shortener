import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import Cta from './components/cta/cta.component';
import Footer from './components/footer/footer.component';
import Details from './components/details/details.component';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Details />
      <Cta />
      <Footer />
    </>
  );
};

export default App;
