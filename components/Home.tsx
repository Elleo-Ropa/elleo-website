import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import VisionMission from './VisionMission';
import Brands from './Brands';
import LogoTicker from './LogoTicker';
import Contact from './Contact';
import CorporateCulture from './CorporateCulture';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Stats />
            <VisionMission />
            <CorporateCulture />
            <Brands />
            <LogoTicker />
            <Contact />
        </main>
    );
};

export default Home;
