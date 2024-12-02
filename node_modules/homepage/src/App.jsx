import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Offer from './components/Offer';

function App() {
  // State to manage the current language
  const [language, setLanguage] = useState('English');

  return (
    <div className="bg-white">
      <Navbar />
      {/* Pass the language state as props */}
      <Hero language={language} />
      <Features />
      <About language={language} />
      <Services />
      <Testimonials />
      <Offer language={language} />
      <FAQ />
      {/* Footer updates the language */}
      <Footer setLanguage={setLanguage} />
    </div>
  );
}

export default App;