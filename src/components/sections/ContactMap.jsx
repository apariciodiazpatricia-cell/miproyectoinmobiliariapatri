/**
 * ContactMap — Interactive office map section matching Figma
 */
function ContactMap() {
    return (
        <section className="contact-map-section" id="contact-map">
            <div className="contact-map-section__inner">

                <div className="contact-map-section__header">
                    <h2 className="contact-map-section__title">Ven a vernos</h2>
                    <p className="contact-map-section__subtitle">Estamos en el centro de Granada</p>
                </div>

                <div className="contact-map-wrapper">
                    {/* Dark-styled interactive map centered on Calle Recogidas, Granada */}
                    <iframe
                        title="Ubicación de Nido Estudiantil Granada"
                        className="contact-map__iframe"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-3.606%2C37.168%2C-3.595%2C37.176&amp;layer=mapnik&amp;marker=37.172%2C-3.601"
                        loading="lazy"
                    ></iframe>

                    {/* Floating location card over map */}
                    <div className="contact-map__badge">
                        <div className="contact-map__badge-icon">📍</div>
                        <div>
                            <p className="contact-map__badge-name">Nido Estudiantil Granada</p>
                            <p className="contact-map__badge-address">Calle Recogidas 42, Granada</p>
                            <p className="contact-map__badge-hours">Lun-Vie: 09:00 - 19:30</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ContactMap
