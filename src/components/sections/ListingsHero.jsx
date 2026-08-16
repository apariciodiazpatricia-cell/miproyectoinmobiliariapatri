/**
 * ListingsHero — dark hero section for the Properties (Pisos) page
 * Matches the Figma: big title + eyebrow + description + CTA
 */
function ListingsHero() {
  return (
    <section className="listings-hero" id="listings-top">
      {/* Dark image overlay */}
      <div className="listings-hero__overlay" aria-hidden="true" />

      <div className="listings-hero__inner">
        <p className="section-eyebrow">Pisos disponibles para estudiantes</p>

        <h1 className="listings-hero__title">
          Encuentra tu piso<br />en <em>Granada</em>
        </h1>

        <p className="listings-hero__description">
          Más de 80 pisos gestionados en los mejores barrios universitarios.
          Seguridad, transparencia y acompañamiento en todo el proceso.
        </p>

        <a href="#listings-grid" className="btn-primary">
          Ver pisos disponibles →
        </a>
      </div>
    </section>
  )
}

export default ListingsHero
