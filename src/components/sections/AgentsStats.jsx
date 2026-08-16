import StatItem from '../ui/StatItem'

/**
 * AgentsStats — Light background banner with clean typography
 */
function AgentsStats() {
  return (
    <section className="agents-stats" id="agents-stats">
      <div className="agents-stats__inner">

        {/* ── Left: Statement text ── */}
        <div className="agents-stats__content">
          <h2 className="agents-stats__title">
            Más que un piso, tu hogar universitario
          </h2>
          <p className="agents-stats__description">
            Conocemos cada barrio, cada campus y cada calle de Granada. Nuestro objetivo
            es que no pierdas tiempo viendo opciones que no encajan contigo. Te asesoramos
            basándonos en tu facultad, tu presupuesto y tu estilo de vida.
          </p>
        </div>

        {/* ── Right: 3 metrics (consistent with Home page) ── */}
        <div className="agents-stats__grid">
          <StatItem value={5}   suffix="+" label="AÑOS" />
          <StatItem value={80}  suffix="+" label="PISOS GESTIONADOS" />
          <StatItem value={180} suffix="+" label="ESTUDIANTES ALOJADOS" />
        </div>

      </div>
    </section>
  )
}

export default AgentsStats
