import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutRedix from './components/AboutRedix';
import WhyUs from './components/WhyUs';
import MarketAnalysis from './components/MarketAnalysis';
import Strategy from './components/Strategy';
import Packages from './components/Packages';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutRedix />
      <WhyUs />
      <MarketAnalysis />
      <Strategy />
      <Packages />
      <Contact />
    </div>
  );
}

export default App;
