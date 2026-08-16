import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

/** Navbar — fixed top navigation bar with logo, primary links and mobile drawer toggle */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo-link" onClick={closeMenu}>
          Nido Estudiantil <span>Granada</span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`}>
          <Link to="/" className="navbar__nav-link" onClick={closeMenu}>
            INICIO
          </Link>
          <Link to="/pisos" className="navbar__nav-link" onClick={closeMenu}>
            PISOS
          </Link>
          <Link to="/agentes" className="navbar__nav-link" onClick={closeMenu}>
            AGENTES
          </Link>
          <Link to="/contacto" className="navbar__nav-link" onClick={closeMenu}>
            CONTACTO
          </Link>
          <Link
            to="/reservar"
            className="navbar__nav-link navbar__nav-link--cta"
            onClick={closeMenu}
          >
            RESERVAR CITA
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
