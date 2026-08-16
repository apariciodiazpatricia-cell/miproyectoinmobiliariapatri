import { expertiseFeatures } from '../../data/expertise'

/**
 * Expertise — "Why choose us" section with clean numbered cards (no drawings)
 */
function Expertise() {
  return (
    <section className="expertise" id="about">
      <div className="expertise__inner">

        {/* ── Left: Team Photo ── */}
        <div className="expertise__image-wrapper">
          <img
            src="/team_office.jpg"
            alt="Equipo de Nido Estudiantil Granada trabajando"
          />
          <span className="expertise__year-tag">Desde 2019</span>
        </div>

        {/* ── Right: Text + Numbered cards ── */}
        <div className="expertise__content">
          <p className="section-eyebrow">Por qué elegirnos</p>
          <h2 className="section-title">
            Expertos en logística residencial universitaria
          </h2>
          <p className="section-description">
            Somos una agencia especializada en el mercado universitario de Granada.
            Conocemos cada barrio, cada contrato y cada necesidad de un estudiante.
            No buscamos solo un piso — buscamos tu hogar.
          </p>

          <div className="feature-cards">
            {expertiseFeatures.map((feature) => (
              <div className="feature-card" key={feature.id}>
                <span className="feature-card__number">{feature.id}</span>
                <div className="feature-card__body">
                  <h4 className="feature-card__title">{feature.title}</h4>
                  <p className="feature-card__description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Expertise
