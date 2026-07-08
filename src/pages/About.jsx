import { motion } from 'framer-motion'
import { Mountain, Shield, Users, TreePine, Award, Heart, ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Ravi Kumar', role: 'Founder & Lead Trekker', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', exp: '10+ years experience' },
  { name: 'Priya Sharma', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400', exp: '8+ years experience' },
  { name: 'Arjun Reddy', role: 'Senior Guide', image: 'https://images.unsplash.com/photo-1500648767791-00dcc4aac36a?w=400', exp: '7+ years experience' },
]

const milestones = [
  { value: '5000+', label: 'Happy Trekkers' },
  { value: '50+', label: 'Unique Trails' },
  { value: '100%', label: 'Safety Record' },
  { value: '8+', label: 'Years Experience' },
]

const values = [
  { icon: Shield, title: 'Safety First', desc: 'Certified guides and comprehensive safety protocols on every trek' },
  { icon: TreePine, title: 'Eco-Friendly', desc: 'Sustainable tourism practices that preserve nature' },
  { icon: Heart, title: 'Community', desc: 'Building a family of adventure enthusiasts' },
  { icon: Award, title: 'Quality', desc: 'Best-in-class equipment and experienced team' },
]

const whyChooseItems = [
  { icon: '🧑‍🤝‍🧑', stat: '5000+', label: 'Happy Trekkers' },
  { icon: '🏔️', stat: '50+', label: 'Unique Trails' },
  { icon: '🛡️', stat: '100%', label: 'Safety Record' },
  { icon: '⭐', stat: '4.9', label: 'Average Rating' },
]

export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920" alt="About" />
          <div className="hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <motion.span 
            className="high-demand-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🏔️ Since 2016
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            About Namma Bengaluru Trekkers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your trusted companion for exploring Karnataka's beautiful trails since 2016
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-content">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2>Our Story</h2>
                <p>
                  Namma Bengaluru Trekkers was founded in 2016 with a simple vision - to make trekking accessible 
                  and enjoyable for everyone in Bangalore. What started as a small group of friends exploring 
                  local trails has grown into one of Karnataka's most trusted trekking organizations.
                </p>
                <p>
                  We believe that every person deserves to experience the magic of mountains, the thrill of 
                  reaching a summit, and the peace that comes from being in nature. Our team of certified 
                  guides ensures safety while maintaining the spirit of adventure.
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="about-story-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" alt="Our journey" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {milestones.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">{stat.value}</span>
                <span className="stat-text">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-alt">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Values</h2>
            <p>What drives us to create unforgettable experiences</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>Expert guides and passionate trekkers</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <span className="team-exp">{member.exp} experience</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg">
          <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920" alt="Join us" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Join Our Trekking Family</h2>
            <p>Start your adventure with us today</p>
            <div className="cta-buttons">
              <Link to="/treks" className="btn btn-primary">View Treks</Link>
              <Link to="/contact" className="btn btn-white">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}