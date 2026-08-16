/** Navbar — fixed top navigation bar with logo and primary links */
function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="/" className="navbar__logo-link">
        Nido Estudiantil <span>Granada</span>
      </a>

      <div className="navbar__nav">
        <a href="/"        className="navbar__nav-link">INICIO</a>
        <a href="/pisos"   className="navbar__nav-link">PISOS</a>
        <a href="/agentes" className="navbar__nav-link">AGENTES</a>
        <a href="/contacto" className="navbar__nav-link">CONTACTO</a>
        <a href="/reservar" className="navbar__nav-link navbar__nav-link--cta">
          RESERVAR CITA
        </a>
      </div>
    </nav>
  )
}

export default Navbar
