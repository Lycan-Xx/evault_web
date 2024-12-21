import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import Components
import Navbar from './components/LandingPage/Navbar';
import Hero from './components/LandingPage/Hero';
import Features from './components/LandingPage/Features';
import About from './components/LandingPage/About';
import Services from './components/LandingPage/Services';
import Mission from './components/LandingPage/Mission';
import Feedback from './components/LandingPage/Feedback';
import Offer from './components/LandingPage/Offer';
import FAQ from './components/LandingPage/FAQ';
import Footer from './components/LandingPage/Footer';
import PrivacyPolicy from './components/LandingPage/Extras/PrivacyPolicy'; // Imported Privacy Policy
import TermsAndConditions from './components/LandingPage/Extras/TermsAndConditions'; // Imported Terms & Conditions

const App = () => {
  const [language, setLanguage] = useState("English");

  // Scroll to the top on route change
  const ScrollToTop = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero language={language} /> {/* Change selectedLanguage to language */}
              <Features />
              <About language={language} />
			  <Mission language={language} />
			  <Services />
              <Feedback />
              <Offer language={language} />
              <FAQ />
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={<><PrivacyPolicy /><Footer /></>} />
          <Route path="/terms-and-conditions" element={<><TermsAndConditions /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
