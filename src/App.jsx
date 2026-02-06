import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhyChoose from './components/WhyChoose'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
