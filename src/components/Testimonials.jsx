import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {name:'Aditya Jain', quote:'Our sales jumped 240% in 3 months after the new website!', title:'Developer, TechSolutions'},
  {name:'Raj', quote:'Best investment we made. Professional, fast, and result-driven.', title:'Marketing Head'},
  {name:'Rohan Verma', quote:"Aditya is a genius. Delivered more than promised!", title:'Director'}
]

export default function Testimonials(){
  // duplicate items for seamless looping
  const loopItems = [...items, ...items]

  return (
    <section className="testimonials">
      <div className="container">
        <h3 className="section-title">Client Success Stories</h3>

        <div className="test-slider">
          <div className="test-track" aria-hidden="false">
            {loopItems.map((it, idx)=> (
              <motion.blockquote className="test-card" key={idx} whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
                <div className="stars">★★★★★</div>
                <p className="quote">"{it.quote}"</p>
                <div className="author"><strong>{it.name}</strong><span>{it.title}</span></div>
              </motion.blockquote>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
