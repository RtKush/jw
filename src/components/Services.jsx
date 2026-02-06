import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {title:'Website Development', desc:'Blazing-fast, SEO-optimized websites that convert visitors into customers.', img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop'},
  {title:'AI & Automation', desc:'Chatbots, lead generation bots, CRM automation & smart workflows.', img:'https://images.unsplash.com/photo-1508385082359-f3d0b0b8b1b6?w=800&q=80&auto=format&fit=crop'},
  {title:'App Development', desc:'Custom mobile & web apps with modern tech stacks (React, Node, Flutter).', img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80&auto=format&fit=crop'}
]

export default function Services(){
  return (
    <section id="services" className="services">
      <div className="container">
        <h3 className="section-title">What We Do</h3>
        <div className="cards">
          {cards.map((c,i)=> (
            <motion.article className="card" key={i} whileHover={{y:-8, boxShadow:'0 18px 30px rgba(0,0,0,0.12)'}} transition={{type:'spring', stiffness:200}}>
              <div className="card-media" style={{backgroundImage:`url(${c.img})`}} />
              <div className="card-body">
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <a className="link-more" href="#">Learn More →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
