import React from "react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";
import p8 from "../images/p8.jpg";

const portfolioImages = [
  { src: img1, alt: "Sales Growth" },
  { src: img2, alt: "Team Collaboration" },
  { src: img3, alt: "SEO Performance" },
  { src: img4, alt: "Jeetweb Digital Solutions" },
];

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <div className="container">
          <h2 className="section-title">Why a Website is Important Today</h2>

          <div className="portfolio-grid">
            {portfolioImages.map((item, index) => (
              <div className="portfolio-card" key={index}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Portfolio: Website Importance Section ===== */}
      <section className="portfolio-importance-section">
        <div className="container portfolio-importance-grid">
          {/* LEFT SIDE */}
          <div className="portfolio-importance-left">
            <h2>Why a Website is Important Today</h2>

            <ul className="portfolio-importance-list">
              <li>
                <strong>First impression of your business</strong>
                <p>
                  Today, customers check your business online before buying. A
                  website is your 24×7 showroom that builds instant credibility.
                </p>
              </li>

              <li>
                <strong>24×7 Sales Machine</strong>
                <p>
                  Automatic booking, inquiry, ordering, and payment — your
                  website keeps selling even while you sleep.
                </p>
              </li>

              <li>
                <strong>Customers compare businesses online</strong>
                <p>
                  If you don’t have a website and your competitor does, you’ve
                  already lost 70% customers instantly.
                </p>
              </li>

              <li>
                <strong>Shows professional & brand value</strong>
                <p>
                  A clean website tells customers: “We are serious, trustworthy,
                  and here to stay.”
                </p>
              </li>

              <li>
                <strong>Google Search Visibility</strong>
                <p>
                  You appear when customers search “best near me”, “best
                  coaching”, “best salon”.
                </p>
              </li>

              <li>
                <strong>Increases conversions</strong>
                <p>
                  A website converts 10× more customers — booking, inquiry, and
                  payment without effort.
                </p>
              </li>

              <li>
                <strong>Essential for advertising</strong>
                <p>
                  Facebook Ads, Google Ads, WhatsApp marketing — sab website pe
                  traffic bhejte hain.
                </p>
              </li>

              <li>
                <strong>Builds Long-Term Digital Authority</strong>
                <p>
                  Your website stores content, testimonials, products, and
                  reviews — a digital asset that grows over time.
                </p>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="portfolio-importance-right">
            <h2>How Jeetweb Helps Businesses Grow</h2>

            <ul className="portfolio-help-list">
              <li>
                <strong>Premium Business Websites</strong>
                <span>Speed-loaded, mobile-first, professional websites.</span>
              </li>

              <li>
                <strong>Lead Generation System</strong>
                <span>More calls, inquiries, bookings & conversions.</span>
              </li>

              <li>
                <strong>Google Ranking (SEO)</strong>
                <span>Top rankings for your city & service keywords.</span>
              </li>

              <li>
                <strong>Branding & Identity</strong>
                <span>Logo, colors & visuals that look premium.</span>
              </li>

              <li>
                <strong>Automation & Customer Management</strong>
                <span>WhatsApp auto-reply, booking, payment, CRM.</span>
              </li>

              <li>
                <strong>Fast Delivery & High Quality</strong>
                <span>Most websites delivered in 7–15 days.</span>
              </li>

              <li>
                <strong>Perfect for All Types of Businesses</strong>
                <span>Coaching, salon, doctor, real estate, e-commerce.</span>
              </li>

              <li>
                <strong>Ongoing Support & Maintenance</strong>
                <span>Free support + lifetime minor updates.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Portfolio Showcase Section ===== */}
      <section className="portfolio-showcase">
        <div className="container">
          <div className="portfolio-header">
            <h2>Our Work</h2>
            <p>Selected projects we’re proud of</p>
          </div>

          <div className="portfolio-showcase-grid">
            <div className="showcase-card">
              <img src={p1} alt="Solar Panel Website" />
              <h3>Solar Panel Website</h3>
            </div>

            <div className="showcase-card">
              <img src={p2} alt="Restaurant Website" />
              <h3>Restaurant Website</h3>
            </div>

            <div className="showcase-card">
              <img src={p3} alt="Food Delivery App" />
              <h3>Food Delivery App</h3>
            </div>

            <div className="showcase-card">
              <img src={p4} alt="Gym Website" />
              <h3>Gym Website</h3>
            </div>

            <div className="showcase-card">
              <img src={p5} alt="Fashion Store" />
              <h3>Fashion Store</h3>
            </div>

            <div className="showcase-card">
              <img src={p6} alt="Solar Energy" />
              <h3>Solar Energy</h3>
            </div>

            <div className="showcase-card">
              <img src={p7} alt="Corporate Website" />
              <h3>Corporate Website</h3>
            </div>

            <div className="showcase-card">
              <img src={p8} alt="Automotive Website" />
              <h3>Automotive Website</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Summary Section ===== */}
      <section className="summary-section">
        <div className="container">
          <h2>Summary</h2>

          <p>
            A website is the most important business tool today. Jeetweb builds
            powerful, trust-focused and lead-generating websites that help
            businesses grow, rank higher on Google, and convert more customers.
          </p>

          {/* Heading instead of button */}
          <h3 className="summary-heading">Let’s work together</h3>

          <div className="summary-actions">
            <a href="tel:+919999999999" className="btn primary-btn">
              Call Now
            </a>
            <a href="#demo" className="btn outline-btn">
              Book Our Demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
