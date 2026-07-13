import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TreePine, ArrowRight, Star, Calendar } from 'lucide-react'

const trekData = [
  { id: 1, name: 'Tadiandamol Peak', location: 'Coorg', duration: '2 Days', price: 3200, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', rating: 4.9, dates: 'Oct 14 - Oct 15', desc: 'The highest peak in Coorg, offering a cloud-walking experience.' },
  { id: 2, name: 'Skandagiri Night', location: 'Bangalore', duration: '1 Day', price: 1500, difficulty: 'Easy', image: 'https://nbtrekkers.com/skandagiri-trek/1.webp', rating: 4.8, dates: 'Oct 21 - Oct 22', desc: 'A mystical moonlit trek above the clouds near Bangalore.' },
  { id: 3, name: 'Kudremukh Peak', location: 'Chikmagalur', duration: '2 Days', price: 2999, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', rating: 4.9, dates: 'Oct 28 - Oct 29', desc: 'A spectacular trek through the lush green forests of the Western Ghats.' },
  { id: 4, name: 'Brahmagiri Wilds', location: 'Kodagu', duration: '2 Days', price: 3800, difficulty: 'Moderate', image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800', rating: 4.7, dates: 'Nov 4 - Nov 5', desc: 'Deep jungle exploration in the heart of Western Ghats.' },
]

const categories = [
  { name: '1 Day Treks', count: 12, image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=600' },
  { name: '2 Days Treks', count: 18, image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600' },
  { name: '3 Days Treks', count: 8, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600' },
  { name: 'Nature Activities', count: 15, image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600' },
]

const stats = [
  { value: '5000+', label: 'Happy Trekkers' },
  { value: '50+', label: 'Unique Trails' },
  { value: '100%', label: 'Safety Record' },
  { value: '8+', label: 'Years Experience' },
]

const testimonials = [
  { name: 'Priya Sharma', role: 'Software Engineer', trek: 'Uttari Betta', text: 'Absolutely magical experience! The sunrise view was breathtaking and the team was super organized. Will definitely join again!', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200' },
  { name: 'Rajesh Kumar', role: 'Business Owner', trek: 'Kudremukh', text: 'Best trekking experience in Karnataka! Well organized, safe, and the guides were extremely knowledgeable. Highly recommended!', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' },
  { name: 'Anita Menon', role: 'Marketing Manager', trek: 'Tadiandamol', text: 'The cloud-walking experience at Tadiandamol was surreal. Great teamwork and safety measures throughout the trek.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200' },
  { name: 'Vikram Sharma', role: 'IT Professional', trek: 'Skandagiri', text: 'Night trek at Skandagiri was incredible! The moonlit trail and sunrise above clouds - memory of a lifetime.', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc4aac0f9?w=200' },
]

export default function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920" alt="Mountain" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <TreePine size={16} />
            Explore. Trek. Discover.
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Discover Karnataka's<br />
            <span className="highlight">Hidden Trails</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join thousands exploring pristine mountains, waterfalls, and sunrise peaks with expert guides.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/treks" className="btn btn-primary">
              <Calendar size={18} />
              Upcoming Treks
            </Link>
            <Link to="/treks" className="btn btn-outline">
              View All Treks
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
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

      {/* Categories */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Explore By Duration</h2>
            <p>Choose your perfect adventure based on time</p>
          </motion.div>

          <div className="categories-grid">
            {categories.map((cat, index) => (
              <motion.div 
                key={index}
                className="category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/treks?category=${cat.name.split(' ')[0].toLowerCase()}`} className="category-link">
                  <div className="category-image">
                    <img src={cat.image} alt={cat.name} />
                    <div className="category-overlay"></div>
                  </div>
                  <div className="category-content">
                    <h3>{cat.name}</h3>
                    <p>{cat.count} Treks</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Treks */}
      <section className="section bg-alt">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="high-demand-badge">🗓️ High Demand</span>
            <h2>Upcoming Expeditions</h2>
            <p>Our weekend departures are curated for maximum impact and minimum stress.</p>
          </motion.div>

          <div className="treks-grid">
            {trekData.map((trek, index) => (
              <motion.div 
                key={trek.id}
                className="trek-card-large"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="trek-card-image">
  <Link
    to="/trekdetails"
    state={{ trek }}
  >
    <img src={trek.image} alt={trek.name} />
  </Link>

  <div className="trek-card-top-badges">
    <span className="status-badge open">Open</span>
    <span className="date-badge">{trek.dates}</span>
  </div>

  <div className="trek-card-badges">
    <span
      className={`difficulty-badge-large ${trek.difficulty.toLowerCase()}`}
    >
      {trek.difficulty} Expedition
    </span>
  </div>

  <div className="trek-card-overlay">
    <div className="trek-card-content">
      <div className="trek-card-info">
        <h3 className="trek-card-title">{trek.name}</h3>
        <p className="trek-card-desc">{trek.desc}</p>
      </div>

      <div className="trek-card-price">
        <span className="price-label">Starting from</span>

        <div className="price-main">
          <span className="currency">₹</span>
          <span className="price-amount">
            {trek.price.toLocaleString()}
          </span>
        </div>

        <Link to="/booking" className="btn-secure-slot">
          Secure Slot
        </Link>
      </div>
    </div>
  </div>
</div>
</motion.div>
            ))}
          </div>

          <div className="group-privilege-card">
            <div className="group-privilege-icon">🧧</div>
            <div className="group-privilege-content">
              <h4>Group Privilege</h4>
              <p>Save 10% for groups of 4+</p>
            </div>
          </div>

          <div className="section-cta">
            <Link to="/treks" className="btn btn-primary">
              View All Treks
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="why-choose-us">
            <div className="why-choose-item">
              <span className="why-choose-icon">🧑‍🤝‍🧑</span>
              <div className="why-choose-stat">5000+</div>
              <div className="why-choose-label">Happy Trekkers</div>
            </div>
            <div className="why-choose-item">
              <span className="why-choose-icon">🏔️</span>
              <div className="why-choose-stat">50+</div>
              <div className="why-choose-label">Unique Trails</div>
            </div>
            <div className="why-choose-item">
              <span className="why-choose-icon">🛡️</span>
              <div className="why-choose-stat">100%</div>
              <div className="why-choose-label">Safety Record</div>
            </div>
            <div className="why-choose-item">
              <span className="why-choose-icon">⭐</span>
              <div className="why-choose-stat">4.9</div>
              <div className="why-choose-label">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Stories From The Trail</h2>
            <p>Real experiences from our community of adventure seekers</p>
          </motion.div>

          <div className="testimonials-slider">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className="testimonial-card-new"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index % testimonials.length) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="testimonial-quote-icon">"</div>
                  <p className="testimonial-text-new">{testimonial.text}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <div className="testimonial-author-new">
                    <img src={testimonial.image} alt={testimonial.name} className="author-image-new" />
                    <div className="author-details">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                      <span className="author-trek-new">{testimonial.trek}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920" alt="Trek" />
          <div className="cta-overlay"></div>
        </div>
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready for Your Next Adventure?</h2>
            <p>Join our upcoming treks and create unforgettable memories</p>
            <div className="cta-buttons">
              <Link to="/treks" className="btn btn-primary">View All Treks</Link>
              <Link to="/contact" className="btn btn-white">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}