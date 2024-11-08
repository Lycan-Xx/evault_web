import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
