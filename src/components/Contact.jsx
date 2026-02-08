import '../styles.css'
export default function Contact() {
  return (
    <section className="contact-page" id="contact">
      <div className="container">
        <h1>Contact Us</h1>
        <p>Let’s discuss how we can help grow your business.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}