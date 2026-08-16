import { Link } from 'react-router-dom'

/** CtaSection — full-width call-to-action banner at the bottom of the page */
function CtaSection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-section__inner">

        <p className="section-eyebrow section-eyebrow--centered">
          ¿Listo para empezar?
        </p>

        <h2 className="cta-section__title">
          ¿Todavía no has<br />encontrado tu <em>piso</em>?
        </h2>

        <p className="cta-section__description">
          Reserva una cita gratuita con nuestros asesores y en menos de 48 horas
          tendrás opciones reales adaptadas a tu presupuesto y zona preferida.
        </p>

        <div className="cta-section__actions">
          <Link to="/pisos"    className="btn-primary">Ver pisos disponibles →</Link>
          <Link to="/reservar" className="btn-outline">Reservar cita gratis</Link>
        </div>

      </div>
    </section>
  )
}

export default CtaSection
