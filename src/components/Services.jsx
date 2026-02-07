import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

export default function Services() {
  return (
    <section id="services" className="services-page">
      {/* ===== Services Hero Section ===== */}
      <section className="services-hero">
        <div className="container services-hero-content">
          <h1>Services</h1>

          <p>
            We build all types of business websites — from simple corporate
            sites to advanced e-commerce, booking systems, web apps, and
            complete digital solutions.
          </p>

          <div className="services-hero-actions">
            <a href="#pricing" className="services-hero-btn primary">
              Get Started
            </a>

            <a
              href="mailto:contact@yourdomain.com"
              className="services-hero-btn secondary"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* ===== Jeetweb Services Info Section ===== */}
      <section className="services-info">
        <div className="container services-info-content">
          <h2>Jeetweb Services</h2>

          <p>
            Jeetweb delivers smart digital solutions designed to attract
            customers, build trust, and accelerate business growth. We create
            modern, high-speed, mobile-friendly websites that instantly make
            your brand look professional and credible. Our custom Android and
            iOS apps help businesses automate operations and increase customer
            engagement. With powerful branding and graphic design we shape a
            visual identity that grabs attention and stays memorable. Our
            digital marketing strategies—SEO, Google Ads, Meta Ads, and targeted
            lead generation—are crafted to convert clicks into real customers.
            At Jeetweb, we focus on quality, speed, and long-term results that
            help your business grow confidently.
          </p>
        </div>
      </section>

      {/* ===== Website Types Section ===== */}
      <section className="website-types">
        <div className="container">
          <div className="website-types-header">
            <h2>We build all types of business websites that create</h2>
            <h2>
              <span>
                trust, attract customers, and convert your traffic into sales.
              </span>
            </h2>
          </div>

          <div className="website-types-grid">
            {/* Company */}
            <div className="type-card">
              <h3>Company</h3>
              <ul>
                <li>Company Websites</li>
                <li>Business portfolio website</li>
                <li>Company profile website</li>
                <li>About, services, careers, contact pages</li>
              </ul>
            </div>

            {/* Service */}
            <div className="type-card">
              <h3>Service</h3>
              <ul>
                <li>Service-Based Business Websites</li>
                <li>Coaching website</li>
                <li>Agency website</li>
                <li>Freelancer website</li>
                <li>Consultation booking website</li>
              </ul>
            </div>

            {/* Personal */}
            <div className="type-card">
              <h3>Personal</h3>
              <ul>
                <li>Personal Branding Websites</li>
                <li>Portfolio website</li>
                <li>Influencer website</li>
                <li>Author / speaker website</li>
                <li>Resume website</li>
              </ul>
            </div>

            {/* Local */}
            <div className="type-card">
              <h3>Location</h3>
              <ul>
                <li>Local Business Websites</li>
                <li>Restaurants</li>
                <li>Gym & fitness</li>
                <li>Salons</li>
                <li>Real estate businesses</li>
              </ul>
            </div>

            {/* Booking */}
            <div className="type-card">
              <h3>Calendar</h3>
              <ul>
                <li>Booking & Appointment Websites</li>
                <li>Doctor appointment system</li>
                <li>Salon booking</li>
                <li>Event booking</li>
                <li>Online scheduling system</li>
              </ul>
            </div>

            {/* Professional */}
            <div className="type-card">
              <h3>Briefcase</h3>
              <ul>
                <li>Professional Service Websites</li>
                <li>Lawyers</li>
                <li>CA / Finance</li>
                <li>Consultants</li>
                <li>Architecture & interior</li>
              </ul>
            </div>

            {/* Education */}
            <div className="type-card">
              <h3>GraduationCap</h3>
              <ul>
                <li>Educational Websites</li>
                <li>Coaching institute</li>
                <li>LMS (Learning Management System)</li>
                <li>Online courses website</li>
                <li>Digital classroom</li>
              </ul>
            </div>

            {/* Marketplace */}
            <div className="type-card">
              <h3>Store</h3>
              <ul>
                <li>Marketplace Websites</li>
                <li>Multi-vendor marketplace</li>
                <li>Service marketplace</li>
                <li>Rental marketplace</li>
              </ul>
            </div>

            {/* Blog */}
            <div className="type-card">
              <h3>Newspaper</h3>
              <ul>
                <li>Blogging & News Websites</li>
                <li>Magazine style</li>
                <li>News portal</li>
                <li>Content management system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pricing Section ===== */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="pricing-header">
            <h2>Choose Your Perfect Plan</h2>
          </div>

          <div className="pricing-grid">
            {/* BASIC */}
            <div className="pricing-card basic">
              <span className="pricing-badge">SPECIAL OFFER</span>
              <h3>BASIC</h3>
              <p className="pricing-subtitle">Single Page Website</p>
              <p className="pricing-ideal">
                Ideal for: Small business | Personal website
              </p>

              <ul>
                <li>1 Year Free Domain & Hosting</li>
                <li>1 Template</li>
                <li>Contact Form + Social Media Integration</li>
                <li>Full Responsive Design</li>
                <li>SSL Certificate Included</li>
                <li>Pages: Home + 3 Basic Pages</li>
                <li>Basic UI/UX Design</li>
                <li>6 Months Support</li>
                <li>Basic SEO Setup</li>
              </ul>

              <div className="pricing-price">
                <del>₹12,000</del>
                <span>₹5,999</span>
              </div>

              <button>Get Started</button>
            </div>

            {/* STANDARD */}
            <div className="pricing-card standard highlight">
              <span className="pricing-badge best">BEST SELLING</span>
              <h3>STANDARD</h3>
              <p className="pricing-subtitle">Multi Page Best Selling</p>

              <ul>
                <li>1 Year Free Domain & Hosting</li>
                <li>Basic E-commerce (10 Products)</li>
                <li>Full Custom Coding</li>
                <li>Full Responsive Design</li>
                <li>SSL Certificate Included</li>
                <li>10–15 Custom Pages</li>
                <li>Blog / News Section</li>
                <li>6 Months Support</li>
                <li>Advance UI/UX Design</li>
                <li>WhatsApp Integration</li>
                <li>Newsletter Setup</li>
                <li>SEO Optimization</li>
              </ul>

              <div className="pricing-price">
                <del>₹18,000</del>
                <span>₹9,999</span>
              </div>

              <button>Get Started</button>
            </div>

            {/* ADVANCE */}
            <div className="pricing-card advance">
              <span className="pricing-badge">SPECIAL OFFER</span>
              <h3>ADVANCE</h3>
              <p className="pricing-subtitle">Fully Functional (Dynamic)</p>

              <ul>
                <li>Free Domain + Premium Hosting</li>
                <li>25 Products (E-commerce Ready)</li>
                <li>Admin Panel + User Login</li>
                <li>Payment Gateway</li>
                <li>Full Custom Coding</li>
                <li>Advanced SEO & Performance</li>
                <li>Live Chat + WhatsApp API</li>
                <li>Unlimited Pages</li>
                <li>1 Year Free Support</li>
                <li>Marketing & Google Tools</li>
              </ul>

              <div className="pricing-price">
                <del>₹40,000</del>
                <span>₹14,999</span>
              </div>

              <button>Get Started</button>
            </div>

            {/* PREMIUM */}
            <div className="pricing-card premium premium-bg">
              <span className="pricing-badge">SPECIAL OFFER</span>
              <h3>PREMIUM</h3>
              <p className="pricing-subtitle">
                Fully Functional Premium Website
              </p>

              <ul>
                <li>Free Domain & Hosting</li>
                <li>All Admin Features</li>
                <li>Unlimited Products / Services</li>
                <li>Advance SEO & Performance</li>
                <li>Payment + Wallet System</li>
                <li>Full Custom Coding</li>
                <li>Multi-Language & Currency</li>
                <li>Live Chat + WhatsApp API</li>
                <li>1 Year Full Support</li>
                <li>Dedicated Technical Support</li>
              </ul>

              <div className="pricing-price">
                <del>₹60,000</del>
                <span>₹24,999</span>
              </div>

              <button>Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <div className="services-cta">
        <div className="container">
          <h2>Ready to Grow Your Business?</h2>
          <p>Let’s build something powerful together.</p>
          <button>Contact Us</button>
        </div>
      </div>
    </section>
  );
}
