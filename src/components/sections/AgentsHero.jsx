/**
 * AgentsHero — Top hero section for the Agents page matching Figma
 */
function AgentsHero() {
    return (
        <section className="agents-hero" id="agents-top">
            <div className="agents-hero__inner">

                {/* ── Left: Text content ── */}
                <div className="agents-hero__content">
                    <p className="section-eyebrow">Personas que buscan hogares</p>
                    <h1 className="agents-hero__title">
                        Conoce a nuestro<br />equipo
                    </h1>
                    <p className="agents-hero__description">
                        Estamos aquí para ayudarte a encontrar un hogar donde puedas disfrutar
                        de tu etapa universitaria.
                    </p>
                </div>

                {/* ── Right: Team photo ── */}
                <div className="agents-hero__image-wrapper">
                    <img
                        src="/team_office.jpg"
                        alt="Equipo de Nido Estudiantil Granada"
                    />
                </div>

            </div>
        </section>
    )
}

export default AgentsHero
