import React from 'react'

const Icon = ({name, className}) => {
  if(name==='instagram') return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>)
  if(name==='github') return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.98 5.26.98 11.53c0 4.63 3.01 8.57 7.19 9.96.53.1.72-.23.72-.51 0-.25-.01-.92-.01-1.8-2.92.64-3.54-1.41-3.54-1.41-.48-1.22-1.17-1.55-1.17-1.55-.96-.66.07-.65.07-.65 1.06.08 1.62 1.09 1.62 1.09.94 1.61 2.46 1.14 3.06.87.09-.68.37-1.14.67-1.4-2.33-.26-4.78-1.16-4.78-5.18 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.36.1-2.84 0 0 .88-.28 2.88 1.08a9.97 9.97 0 012.62-.35c.89 0 1.78.12 2.62.35 2-.36 2.88-1.08 2.88-1.08.57 1.48.21 2.57.1 2.84.67.74 1.08 1.68 1.08 2.83 0 4.03-2.46 4.92-4.8 5.18.38.33.72.98.72 1.98 0 1.43-.01 2.58-.01 2.93 0 .28.19.62.73.51 4.18-1.39 7.19-5.33 7.19-9.96C23.02 5.26 18.27.5 12 .5z" fill="currentColor"/></svg>)
  if(name==='linkedin') return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M6 9.5v8M6 6.5v.01M10 17.5v-6c0-1.1.9-2 2-2s2 .9 2 2v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>)
  if(name==='twitter') return (<svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 4.5a9.2 9.2 0 01-2.6.72A4.6 4.6 0 0022.4 3c-.9.53-1.9.92-3 1.14A4.58 4.58 0 0016.1 3c-2.5 0-4.5 2.1-4.5 4.6 0 .36.04.72.12 1.06C7.7 8.6 4 6.6 1.7 3.5c-.4.72-.6 1.54-.6 2.42 0 1.67.82 3.14 2.06 4.01a4.5 4.5 0 01-2.04-.57v.06c0 2.33 1.66 4.27 3.86 4.71-.4.1-.82.15-1.25.15-.3 0-.6-.03-.9-.08.6 1.86 2.36 3.2 4.44 3.24A9.2 9.2 0 010 19.54 13 13 0 007.07 22c8.48 0 13.12-7.04 13.12-13.15v-.6A9.3 9.3 0 0023 4.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>)
  return null
}

export default function Footer(){
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-grid">
        <div className="about-col">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div className="logo-badge large">JW</div>
            <div style={{fontWeight:800,fontSize:18}}>JEETWEB</div>
          </div>
          <p className="about-desc">JeetWeb – We Build Websites & AI Solutions That Grow Your Business. Your trusted partner for Web Development, AI Tools & Branding.</p>
          <p className="muted"><strong>The Location</strong><br/>Indore, Madhya Pradesh<br/>India</p>

          <div className="socials">
            <a href="#" aria-label="instagram"><Icon name="instagram"/></a>
            <a href="#" aria-label="github"><Icon name="github"/></a>
            <a href="#" aria-label="linkedin"><Icon name="linkedin"/></a>
            <a href="#" aria-label="twitter"><Icon name="twitter"/></a>
          </div>
        </div>

        <div className="services-col">
          <h4>IT Services</h4>
          <ul>
            <li><a href="#">Modern Website Development</a></li>
            <li><a href="#">Branding & Graphic Design</a></li>
            <li><a href="#">Premium UI/UX Design</a></li>
            <li><a href="#">Software Development</a></li>
            <li><a href="#">Website Maintenance & Security</a></li>
          </ul>
        </div>

        <div className="support-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Optimization</a></li>
            <li><a href="#">24/7 Technical Security</a></li>
            <li><a href="#">Fast Support</a></li>
          </ul>
        </div>

        <div className="quick-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>

          <div className="whatsapp-wrap">
            <a className="whatsapp-btn" href="#">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{marginRight:8}} xmlns="http://www.w3.org/2000/svg"><path d="M21.7 4.3A11 11 0 0012 1C6 1 1.7 5.3 1.7 11c0 1.9.5 3.7 1.5 5.3L1 23l6.1-2c1.4.6 2.9.9 4.9.9 6 0 10.3-4.3 10.3-10.3 0-1.9-.6-3.5-1.6-4.9z" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 14.6c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.9 1.1-.4.2-.8.1a6.4 6.4 0 01-1.9-1.2 7 7 0 01-1.3-1.6c-.1-.2 0-.3.1-.4.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s0-.5-.1-.7c-.1-.2-.8-1.9-1.2-2.6-.3-.7-.6-.5-.8-.5-.2 0-.5 0-.8 0s-.6.1-.9.4c-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.2 4.9 4.4 2.8 1.2 2.8.8 3.3.8.5 0 1.6-.6 1.8-1.2.2-.6.2-1.1.1-1.2-.1-.1-.4-.2-.7-.3z" fill="#fff"/></svg>
              Chat on WhatsApp
            </a>
          </d