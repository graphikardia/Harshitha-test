import { Link } from 'react-router-dom'
import { Mountain, Menu, X, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/treks', label: 'Upcoming Treks' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/gallery', label: 'Gallery' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <Mountain size={24} color="white" />
          </div>
          <span className="logo-text">Namma Bengaluru <span className="logo-highlight">Trekkers</span></span>
        </Link>

        <div className={`nav-links ${mobileOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="nav-link" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a href="tel:+919876543210" className="nav-phone">
            <Phone size={18} />
            <span>Call Us</span>
          </a>
          <Link to="/booking" className="btn btn-book">Book now </Link>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}