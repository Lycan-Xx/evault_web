import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Offer from './components/Offer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [language, setLanguage] = useState('English');

  return (
    <Router>
      <ScrollToTop /> {/* This ensures the page scrolls to the top on route change */}
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero language={language} />
                <Features />
                <About language={language} />
                <Services />
                <Testimonials />
                <Offer language={language} />
                <FAQ />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer setLanguage={setLanguage} />
      </div>
    </Router>
  );
}

export default App;
