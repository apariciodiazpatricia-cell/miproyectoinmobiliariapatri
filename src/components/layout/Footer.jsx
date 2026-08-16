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
            <a href="#" className="footer__social-link" aria-label="Instagram">📷</a>
            <a href="#" className="footer__social-link" aria-label="Facebook">👤</a>
            <a href="#" className="footer__social-link" aria-label="WhatsApp">💬</a>
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
            <a href="/"         className="footer__nav-link">Inicio</a>
            <a href="/pisos"    className="footer__nav-link">Pisos disponibles</a>
            <a href="/agentes"  className="footer__nav-link">Nuestro equipo</a>
            <a href="/contacto" className="footer__nav-link">Contacto</a>
            <a href="/reservar" className="footer__nav-link">Reservar cita</a>
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
