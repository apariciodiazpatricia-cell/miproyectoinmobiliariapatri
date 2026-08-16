import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Pisos from './pages/Pisos'
import Agents from './pages/Agents'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import './index.css'

/** Root application — routing + persistent layout chrome */
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pisos" element={<Pisos />} />
        <Route path="/agentes" element={<Agents />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/reservar" element={<Booking />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
