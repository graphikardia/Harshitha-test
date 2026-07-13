import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Clock,
  Mountain,
  Footprints,
  Star,
  ArrowRight,
  Calendar,
  Users,
  Search
} from 'lucide-react'

const trekData = [
  { id: 1, name: 'Uttari Betta Sunrise Trek', location: 'Bangalore', category: 'Sunrise', duration: '1 Day', distance: '4 km', altitude: '2400 ft', difficulty: 'Easy', price: 699, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', rating: 4.8, highlights: ['Sunrise View', 'Jungle Trail', 'Ancient Temple'], slots: 25 },
  { id: 2, name: 'Kudremukh Peak Expedition', location: 'Chikmagalur', category: 'Moderate', duration: '2 Days', distance: '15 km', altitude: '6200 ft', difficulty: 'Moderate', price: 2999, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800', rating: 4.9, highlights: ['Shola Grassland', 'Waterfalls', 'Wildlife'], slots: 20 },
  { id: 3, name: 'Netravathi Peak Challenge', location: 'Dakshina Kannada', category: 'Difficult', duration: '2 Days', distance: '12 km', altitude: '5500 ft', difficulty: 'Difficult', price: 3159, image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800', rating: 4.7, highlights: ['Peak Summit', 'Dense Forest', 'River Crossing'], slots: 15 },
  { id: 4, name: 'Makalidurga Night Trek', location: 'Tumkur', category: 'Easy', duration: '1 Day', distance: '6 km', altitude: '3800 ft', difficulty: 'Easy', price: 899, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', rating: 4.6, highlights: ['Night Trek', 'Star Gazing', 'Fort Ruins'], slots: 30 },
  { id: 5, name: 'Kodachadri Hill Trek', location: 'Shimoga', category: 'Moderate', duration: '2 Days', distance: '10 km', altitude: '4400 ft', difficulty: 'Moderate', price: 4999, image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800', rating: 4.9, highlights: ['Kodachadri Viewpoint', 'Forest', 'Waterfalls'], slots: 18 },
  { id: 6, name: 'Tadiandamol Peak', location: 'Coorg', category: 'Difficult', duration: '2 Days', distance: '14 km', altitude: '5700 ft', difficulty: 'Difficult', price: 3499, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800', rating: 4.8, highlights: ['Highest Peak in Coorg', 'Valleys', 'Mist'], slots: 15 },
  { id: 7, name: 'Devaramane Sunrise', location: 'Tumkur', category: 'Sunrise', duration: '1 Day', distance: '5 km', altitude: '3200 ft', difficulty: 'Easy', price: 799, image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800', rating: 4.7, highlights: ['Sunrise View', 'Valley', 'Temple'], slots: 25 },
  { id: 8, name: 'Ballarayanadurga Trek', location: 'Chikmagalur', category: 'Moderate', duration: '2 Days', distance: '18 km', altitude: '5800 ft', difficulty: 'Moderate', price: 3299, image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', rating: 4.8, highlights: ['Rocky Trail', 'Forest', 'Cave'], slots: 12 },
  { id: 9, name: 'Kumaraparvath Trek', location: 'Dakshina Kannada', category: 'Easy', duration: '1 Day', distance: '4 km', altitude: '2800 ft', difficulty: 'Easy', price: 599, image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800', rating: 4.5, highlights: ['Easy Trail', 'Green Forest', 'Viewpoint'], slots: 30 },
  { id: 10, name: 'Bheemeswara Trek', location: 'Chikkaballapur', category: 'Nature', duration: '1 Day', distance: '5 km', altitude: '3000 ft', difficulty: 'Easy', price: 649, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', rating: 4.6, highlights: ['Temple', 'Hilltop', 'Nature'], slots: 25 },
  { id: 11, name: 'Anthargange Trek', location: 'Kolar', category: 'Cave', duration: '1 Day', distance: '4 km', altitude: '2600 ft', difficulty: 'Easy', price: 599, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800', rating: 4.5, highlights: ['Cave Exploration', 'Rocky Terrain', 'Sunset'], slots: 30 },
  { id: 12, name: 'Kunti Betta Trek', location: 'Puttaparthi', category: 'Easy', duration: '1 Day', distance: '6 km', altitude: '3500 ft', difficulty: 'Easy', price: 749, image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800', rating: 4.7, highlights: ['Sunrise', 'Rocky Hill', 'Pyramid Peak'], slots: 20 },
]

export default function Treks() {
  console.log("TREKS FILE LOADED");
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const difficultyFilters = ['All', 'Easy', 'Moderate', 'Difficult']
  const durationFilters = ['All', '1 Day', '2 Days', '3 Days']
  
  const [activeDifficulty, setActiveDifficulty] = useState('All')
  const [activeDuration, setActiveDuration] = useState(categoryParam || 'All')
  const [search,setSearch]=useState("")

  const getFilteredTreks = () => {
  let filtered = trekData;

  if (activeDifficulty !== "All") {
    filtered = filtered.filter(
      (t) => t.difficulty === activeDifficulty
    );
  }

  if (activeDuration !== "All") {
    filtered = filtered.filter(
      (t) => t.duration === activeDuration
    );
  }

  if (search.trim() !== "") {
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.location.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filtered;
};

  const filteredTreks = getFilteredTreks()

  return (
    <div className="page">
      <section className="page-hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920" alt="Treks" />
          <div className="hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <motion.span 
            className="high-demand-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🗓️ Upcoming Expeditions
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Find Your Perfect Adventure
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Curated treks for every skill level - from beginners to seasoned trekkers
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-group">
            <label>Duration:</label>
            <div className="filter-buttons">
              {durationFilters.map(filter => (
                <button 
                  key={filter}
                  className={`filter-btn ${activeDuration === filter ? 'active' : ''}`}
                  onClick={() => setActiveDuration(filter)}
                >
                  {filter}
                  {filter !== 'All' && <span className="filter-count">{trekData.filter(t => t.duration === filter).length}</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Difficulty:</label>
            <div className="filter-buttons">
              {difficultyFilters.map(filter => (
                <button 
                  key={filter}
                  className={`filter-btn ${activeDifficulty === filter ? 'active' : ''}`}
                  onClick={() => setActiveDifficulty(filter)}
                >
                  {filter}
                  {filter !== 'All' && <span className="filter-count">{trekData.filter(t => t.difficulty === filter).length}</span>}
                </button>
              ))}
            </div>
          </div>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "35px"
  }}
>
  <div
    style={{
      position: "relative",
      width: "100%",
      maxWidth: "500px"
    }}
  >
    <Search
      size={20}
      style={{
        position: "absolute",
        top: "14px",
        left: "15px",
        color: "#888"
      }}
    />

    <input
      type="text"
      placeholder="Search by trek name or location..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        width: "100%",
        padding: "14px 18px 14px 45px",
        borderRadius: "30px",
        border: "1px solid #ddd",
        fontSize: "16px",
        outline: "none",
        boxShadow: "0 5px 15px rgba(0,0,0,.08)"
      }}
    />
  </div>
</div>

          <div className="treks-grid">
            <AnimatePresence>
              {filteredTreks.map((trek, index) => (
                <motion.div 
                  key={trek.id}
                  className="trek-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                >
                  <Link
                    to="/trekdetails"
                    state={{ trek }}
                    className="trek-image"
                  >
                    <img src={trek.image} alt={trek.name} />
                    <div className="trek-image-content">
                    <h3 className="trek-image-name">{trek.name}</h3>

                  <div className="trek-image-location">
                    <MapPin size={14} />
                    <span>{trek.location}</span>
                  </div>
                  </div>
                    <div className="trek-badges">
                      <span className="difficulty-badge">{trek.difficulty}</span>
                      <span className="category-badge">{trek.category}</span>
                    </div>
                    <div className="trek-rating">
                      <Star size={14} fill="#F59E0B" color="#F59E0B" />
                      {trek.rating}
                    </div>
                    <div className="trek-slots">
                      <Users size={14} />
                      {trek.slots} slots left
                      </div>
                    <div className="trek-image-title">
                      {trek.name}
                    </div>
                  </Link>
                  
                  <div
                    className="trek-info"
                    style={{
                      background: "yellow",
                      padding: "20px",
                      display: "block"
                    }}
                  >
                    
                    <div className="trek-location">
                      <MapPin size={14} />
                      {trek.location}
                    </div>
                    <h3 style={{ color: "red", fontSize: "24px" }}>
                      {trek.name}
                    </h3>
                    
                   

                    <div className="trek-meta">
                      <div className="meta-item">
                        <Clock size={14} />
                        <span>{trek.duration}</span>
                      </div>
                      <div className="meta-item">
                        <Footprints size={14} />
                        <span>{trek.distance}</span>
                      </div>
                      <div className="meta-item">
                        <Mountain size={14} />
                        <span>{trek.altitude}</span>
                      </div>
                    </div>

                    <div className="trek-footer">
                      <div className="trek-price">
                        <span className="price-label">Starting from</span>
                        <span className="price-value">₹{trek.price}</span>
                        <span className="price-unit">/person</span>
                      </div>
                      <Link
                        to="/booking"
                        className="btn-book-trek"
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px"
                        }}
                      >
  Book Trek
  <ArrowRight size={16} />
</Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="section cta-mini">
        <div className="container">
          <div className="cta-mini-content">
            <h3>Can't find the right trek?</h3>
            <p>Contact us for custom trekking packages for groups</p>
            <button className="btn btn-primary">
              <Calendar size={18} />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
