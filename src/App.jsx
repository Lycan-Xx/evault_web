import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
