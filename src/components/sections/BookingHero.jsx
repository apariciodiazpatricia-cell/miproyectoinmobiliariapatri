/**
 * BookingHero — Top hero section for the Booking (Reservar Cita) page
 */
function BookingHero() {
    return (
        <section className="booking-hero" id="booking-top">
            <div className="booking-hero__inner">
                <p className="section-eyebrow">Tu piso ideal</p>
                <h1 className="booking-hero__title">Reserva tu cita</h1>
                <p className="booking-hero__description">
                    ¿Has encontrado un piso que te interesa? Reserva una visita y ven a conocerlo.
                    Nuestro equipo te acompañará durante todo el proceso.
                </p>
            </div>
        </section>
    )
}

export default BookingHero
