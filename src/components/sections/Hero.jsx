import { Link } from 'react-router-dom'

/** Hero — full-viewport opening section with headline, CTA and property image */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">

        {/* ── Left: text content ── */}
        <div className="hero__content">
          <p className="hero__eyebrow">Nido Estudiantil Granada</p>

          <h1 className="hero__title">
            El piso ideal,<br />
            cerca de la <em>Universidad</em><br />
            de Granada
          </h1>

          <p className="hero__description">
            Encontramos el alojamiento perfecto para tu etapa universitaria.
            Habitaciones y pisos completos en los mejores barrios de Granada,
            con total seguridad y acompañamiento personalizado.
          </p>

          <div className="hero__actions">
            <Link to="/pisos" className="btn-primary">Ver pisos →</Link>
            <Link to="/reservar" className="btn-outline">Reservar cita</Link>
          </div>
        </div>

        {/* ── Right: property photo with floating badge ── */}
        <div className="hero__image-wrapper">
          <img
            src="/hero_apartment.jpg"
            alt="Piso moderno en Granada con vistas a la Alhambra"
          />
          <div className="hero__badge">
            <span className="hero__badge-value">5+</span>
            <span className="hero__badge-label">años de experiencia</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
