import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container nav-row">
        <div className="logo">
          <div className="logo-badge">W</div>
          <div className="brand">JEETWEB</div>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
