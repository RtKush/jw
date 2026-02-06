import React from 'react'

const cards = [
  {icon:'❤', title:'Real-Time Signals', text:'JeetWeb provides accurate buy/sell signals in real time, helping traders make confident decisions and maximize profits.'},
  {icon:'≡', title:'Comprehensive Analysis', text:"Analyze multiple markets with ease using JeetWeb's advanced technical tools, tailored for both beginners and experts."},
  {icon:'●', title:'Data Security', text:'We ensure secure data handling, keeping your trading information confidential and protected at all times.'},
  {icon:'⚙', title:'Custom Strategies', text:"Build and customize trading strategies to suit your unique needs and trading style with JeetWeb's flexible tools."},
  {icon:'🛡', title:'Risk Management', text:'Implement effective risk management with JeetWeb\'s advanced tools, ensuring safer trading practices.'},
  {icon:'📞', title:'24/7 Support', text:'Our dedicated support team is available around the clock to assist you with any queries or issues.'}
]

export default function WhyChoose(){
  return (
    <section className="why-choose">
      <div className="container">
        <h3 className="section-title">Why Choose <span className="gradient">JeetWeb</span></h3>
        <div className="why-grid">
          {cards.map((c, i)=> (
            <div className="why-card" key={i}>
              <div className="why-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
              <a className="link-more" href="#">Discover now →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
