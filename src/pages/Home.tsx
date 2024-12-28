import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-black text-[#00ff00]">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Home;