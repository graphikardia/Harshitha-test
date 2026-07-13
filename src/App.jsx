import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Treks from './pages/Treks'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import TrekDetails from "./pages/TrekDetails";
import ScrollToTop from "./ScrollToTop";


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treks" element={<Treks />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/trekdetails" element={<TrekDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}