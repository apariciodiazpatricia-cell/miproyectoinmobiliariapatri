import { Link } from 'react-router-dom'

/** Footer — site-wide footer with brand info, contact details and nav links */
function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer__inner">

        {/* ── Brand column ── */}
        <div className="footer__brand">
          <h2 className="footer__brand-name">
            Nido Estudiantil <span>Granada</span>
          </h2>
          <p className="footer__tagline">
            Tu agencia de referencia para encontrar piso en Granada.
            Especialistas en alojamiento para universitarios desde 2019.
          </p>
          <div className="footer__social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">📷</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">👤</a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="WhatsApp">💬</a>
          </div>
        </div>

        {/* ── Contact column ── */}
        <div className="footer__contact">
          <h3 className="footer__column-heading">Contacto</h3>
          <div className="footer__contact-info">
            <p>📍 Granada, España</p>
            <p>✉️ info@nidoestudiantil.com</p>
            <p>📞 +34 600 000 000</p>
          </div>
        </div>

        {/* ── Navigation links column ── */}
        <div>
          <h3 className="footer__column-heading">Secciones</h3>
          <nav className="footer__nav-links" aria-label="Footer navigation">
            <Link to="/"         className="footer__nav-link">Inicio</Link>
            <Link to="/pisos"    className="footer__nav-link">Pisos disponibles</Link>
            <Link to="/agentes"  className="footer__nav-link">Nuestro equipo</Link>
            <Link to="/contacto" className="footer__nav-link">Contacto</Link>
            <Link to="/reservar" className="footer__nav-link">Reservar cita</Link>
          </nav>
        </div>

      </div>

      {/* ── Bottom copyright bar ── */}
      <div className="footer__bottom">
        <p>© 2026 Nido Estudiantil Granada. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ en Granada</p>
      </div>
    </footer>
  )
}

export default Footer
