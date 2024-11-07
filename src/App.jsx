import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="className">
      <div>
        <Navbar />
        <div id="Home" style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
          Home Section
        </div>
        <div
          id="Services"
          style={{ height: "100vh", backgroundColor: "#e0e0e0" }}
        >
          Services Section
        </div>
        <div id="About" style={{ height: "100vh", backgroundColor: "#d0d0d0" }}>
          About Section
        </div>
        <div id="FAQ" style={{ height: "100vh", backgroundColor: "#c0c0c0" }}>
          FAQ Section
        </div>
        <div
          id="Contact"
          style={{ height: "100vh", backgroundColor: "#b0b0b0" }}
        >
          Contact Section
        </div>
      </div>
      <Navbar />
      <Hero />
      <Features />
      <Services />

      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
