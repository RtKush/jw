import React from 'react'
import { motion } from 'framer-motion'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8 } } }

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="show">
          <motion.h1 className="hero-title" variants={fadeUp}>
            We Build Websites &amp; AI Solutions
            <br/>
            <span className="gradient">That Grow Your Business</span>
          </motion.h1>

          <motion.p className="hero-lead" variants={fadeUp}>
            Professional web development, automation tools, and AI-powered solutions to take your
            business to the next level.
          </motion.p>

          <motion.div className="hero-cta" variants={fadeUp}>
            <a className="btn-primary" href="#contact">Get Started Now</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
