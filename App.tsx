import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import VisionMission from './components/VisionMission';
import Brands from './components/Brands';
import LogoTicker from './components/LogoTicker';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CorporateCulture from './components/CorporateCulture';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NavBar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <VisionMission />
        <CorporateCulture />
        <Brands />
        <LogoTicker />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;