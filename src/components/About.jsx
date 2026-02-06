import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <motion.div className="about-image" initial={{opacity:0, x:-40}} animate={{opacity:1,x:0}} transition={{duration:0.8}}>
          <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&q=80&auto=format&fit=crop" alt="team" />
        </motion.div>
        <motion.div className="about-content" initial={{opacity:0, x:40}} animate={{opacity:1,x:0}} transition={{duration:0.8}}>
          <h3>About Me</h3>
          <p><strong>Founder of JEETWEB</strong> — with <span className="accent">5+ years</span> of experience in full-stack development, AI integration, and digital growth strategies.</p>
          <p><strong>Aditya Jain</strong>, the Co-Founder and Website Developer of Jeetweb, specializes in creating high-performance, modern, and fully optimized websites that help businesses scale faster and build a powerful online presence.</p>
          <div className="stats">
            <div><strong>50+</strong><span>Happy Clients</span></div>
            <div><strong>₹10Cr+</strong><span>Revenue Generated</span></div>
            <div><strong>100%</strong><span>Satisfaction</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
