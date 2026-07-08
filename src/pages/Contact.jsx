import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactInfo = [
    { icon: Phone, title: 'Phone', details: ['+91 98765 43210', '+91 98765 43211'] },
    { icon: Mail, title: 'Email', details: ['info@nbtrekkers.com', 'bookings@nbtrekkers.com'] },
    { icon: MapPin, title: 'Address', details: ['Bangalore, Karnataka', 'India'] },
    { icon: Clock, title: 'Hours', details: ['Mon-Sat: 9AM - 7PM', 'Sunday: 10AM - 5PM'] },
  ]

  return (
    <div className="page">
      <section className="page-hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920" alt="Contact" />
          <div className="hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <motion.span 
            className="high-demand-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            💬 We're Here to Help
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have questions? We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-section">
              <motion.div 
                className="section-header-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2>Get In Touch</h2>
                <p>Have questions about treks? Want to book a custom trip? We're here to help!</p>
              </motion.div>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-info-icon">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <h4>{info.title}</h4>
                      {info.details.map((d, i) => (
                        <p key={i}>{d}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-card">
                <h3>Send Us a Message</h3>
                {submitted ? (
                  <div className="form-success">
                    <MessageCircle size={48} />
                    <h4>Thank You!</h4>
                    <p>We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your trekking plans..."
                        rows="4"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section bg-alt">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Quick Actions</h2>
            <p>Choose how you'd like to connect with us</p>
          </motion.div>

          <div className="quick-actions-grid">
            <motion.div 
              className="quick-action-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Calendar size={40} />
              <h3>Book a Trek</h3>
              <p>Browse upcoming treks and book your adventure</p>
              <button className="btn btn-primary">
                View Treks
                <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div 
              className="quick-action-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <MessageCircle size={40} />
              <h3>WhatsApp Us</h3>
              <p>Get quick responses on WhatsApp</p>
              <a href="https://wa.me/919876543210" className="btn btn-primary">
                Chat Now
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div 
              className="quick-action-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Phone size={40} />
              <h3>Call Us</h3>
              <p>Speak directly with our team</p>
              <a href="tel:+919876543210" className="btn btn-primary">
                Call Now
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </motion.div>

          <div className="faq-grid">
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4>What is included in the trek cost?</h4>
              <p>Transport, meals, guide fees, entry tickets, and safety equipment are included. Personal expenses are extra.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4>What is the cancellation policy?</h4>
              <p>Full refund if cancelled 7+ days before trek, 50% refund for 3-6 days, no refund for less than 3 days.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4>Do I need prior trekking experience?</h4>
              <p>No! We have treks for all skill levels. Easy treks are perfect for beginners.</p>
            </motion.div>
            <motion.div 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4>What should I carry?</h4>
              <p>Comfortable shoes, water bottle, rain jacket, flashlight, and personal medications. Full list provided after booking.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}