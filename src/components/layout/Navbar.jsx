import { useState } from 'react'

/** Navbar — fixed top navigation bar with logo, primary links and mobile drawer toggle */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__container">
        <a href="/" className="navbar__logo-link" onClick={closeMenu}>
          Nido Estudiantil <span>Granada</span>
        </a>

        {/* Mobile Hamburger Button */}
        <button
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
          <a href="/" className="navbar__nav-link" onClick={closeMenu}>
            INICIO
          </a>
          <a href="/pisos" className="navbar__nav-link" onClick={closeMenu}>
            PISOS
          </a>
          <a href="/agentes" className="navbar__nav-link" onClick={closeMenu}>
            AGENTES
          </a>
          <a href="/contacto" className="navbar__nav-link" onClick={closeMenu}>
            CONTACTO
          </a>
          <a
            href="/reservar"
            className="navbar__nav-link navbar__nav-link--cta"
            onClick={closeMenu}
          >
            RESERVAR CITA
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
