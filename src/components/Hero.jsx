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
            Let's Build <span className="gradient">Together</span>
          </motion.h1>
          <motion.h2 className="hero-sub" variants={fadeUp}>Your Success Is Our Mission</motion.h2>
          <motion.p className="hero-lead" variants={fadeUp}>
            JEETWEB — India’s First AI-Powered Smart Business Platform. One platform. All solutions. Zero headache.
          </motion.p>
          <motion.div className="hero-cta" variants={fadeUp}>
            <a className="btn-primary" href="#contact">Start Your Project Now</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
