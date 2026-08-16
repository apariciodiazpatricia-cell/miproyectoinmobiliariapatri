import useCountUp from '../../hooks/useCountUp'

/**
 * StatItem — muestra un número animado con una etiqueta descriptiva
 *
 * @param {number} value  - Número final al que animar
 * @param {string} suffix - Símbolo tras el número (ej: '+', '%')
 * @param {string} label  - Texto descriptivo debajo del número
 */
function StatItem({ value, suffix = '', label }) {
  const [count, ref] = useCountUp(value)  // le pedimos el número animado a la cocina 🍳

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-item__value">
        {count}
        <span className="stat-item__suffix">{suffix}</span>
      </div>
      <p className="stat-item__label">{label}</p>
    </div>
  )
}

export default StatItem
