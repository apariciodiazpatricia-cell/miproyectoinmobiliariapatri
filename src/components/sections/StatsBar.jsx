import StatItem from '../ui/StatItem'

/** StatsBar — horizontal strip of animated key metrics */
function StatsBar() {
  return (
    <section className="stats-bar" id="stats">
      <div className="stats-bar__inner">
        <StatItem value={5}   suffix="+" label="Años de experiencia" />
        <StatItem value={80}  suffix="+" label="Pisos gestionados" />
        <StatItem value={130} suffix="+" label="Estudiantes alojados" />
        <StatItem value={98}  suffix="%" label="Clientes satisfechos" />
      </div>
    </section>
  )
}

export default StatsBar
