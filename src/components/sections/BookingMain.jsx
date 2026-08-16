import { useState } from 'react'
import { featuredProperties } from '../../data/properties'
import { bookingSteps } from '../../data/bookingSteps'

/**
 * BookingMain — Interactive Booking form + How it Works matching Figma
 */
function BookingMain() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        propertyId: featuredProperties[0]?.title || '',
        date: '',
        timeSlot: '10:00 - 12:00',
        notes: '',
        acceptTerms: false,
    })

    const [isReserved, setIsReserved] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.acceptTerms) {
            alert('Por favor, acepta la política de privacidad para reservar.')
            return
        }
        setIsReserved(true)
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    // Calculate today's date formatted as YYYY-MM-DD for the min date attribute
    const today = new Date().toISOString().split('T')[0]

    return (
        <section className="booking-main" id="booking-form-section">
            <div className="booking-main__inner">

                {/* ── Left Column: Booking Form ── */}
                <div className="booking-form-wrapper">
                    <h2 className="booking-form-wrapper__title">Reserva tu visita</h2>
                    <p className="booking-form-wrapper__intro">
                        Completa los datos a continuación para programar una visita al piso deseado.
                    </p>

                    {isReserved ? (
                        <div className="booking-form__success">
                            <span className="booking-form__success-icon">🎉</span>
                            <h3>¡Solicitud de cita recibida!</h3>
                            <p>
                                Hemos recibido tu solicitud para visitar <strong>{formData.propertyId}</strong> el{' '}
                                <strong>{formData.date}</strong> en horario <strong>{formData.timeSlot}</strong>.
                            </p>
                            <p style={{ marginTop: '0.8rem', color: '#64748b' }}>
                                Un agente se pondrá en contacto contigo en breve para confirmar la cita.
                            </p>
                            <button
                                className="btn-primary"
                                onClick={() => setIsReserved(false)}
                                style={{ marginTop: '1.5rem' }}
                            >
                                Reservar otra cita
                            </button>
                        </div>
                    ) : (
                        <form className="booking-form" onSubmit={handleSubmit}>
                            <div className="booking-form__row">
                                <div className="booking-form__group">
                                    <label htmlFor="fullName">NOMBRE COMPLETO *</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Ej. Ana García"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="booking-form__group">
                                    <label htmlFor="email">EMAIL *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="ej@email.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="booking-form__group">
                                <label htmlFor="phone">TELÉFONO *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+34 600 000 000"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="booking-form__group">
                                <label htmlFor="propertyId">PISO A VISITAR *</label>
                                <select
                                    id="propertyId"
                                    name="propertyId"
                                    value={formData.propertyId}
                                    onChange={handleChange}
                                    required
                                >
                                    {featuredProperties.map((p) => (
                                        <option key={p.id} value={p.title}>
                                            {p.title} ({p.neighborhood}) - {p.pricePerRoom}€/hab
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="booking-form__row">
                                <div className="booking-form__group">
                                    <label htmlFor="date">FECHA *</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        min={today}
                                        required
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="booking-form__group">
                                    <label htmlFor="timeSlot">HORA PREFERIDA *</label>
                                    <select
                                        id="timeSlot"
                                        name="timeSlot"
                                        value={formData.timeSlot}
                                        onChange={handleChange}
                                    >
                                        <option value="10:00 - 12:00">10:00 - 12:00</option>
                                        <option value="12:00 - 14:00">12:00 - 14:00</option>
                                        <option value="16:00 - 18:00">16:00 - 18:00</option>
                                        <option value="18:00 - 20:00">18:00 - 20:00</option>
                                    </select>
                                </div>
                            </div>

                            <div className="booking-form__group">
                                <label htmlFor="notes">MENSAJE ADICIONAL</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows="3"
                                    placeholder="¿Alguna duda o petición específica?"
                                    value={formData.notes}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <label className="booking-form__checkbox">
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    required
                                />
                                <span>
                                    He leído y acepto la política de privacidad para concertar la visita al inmueble.
                                </span>
                            </label>

                            <button type="submit" className="booking-form__submit-btn">
                                RESERVAR CITA
                            </button>
                        </form>
                    )}
                </div>

                {/* ── Right Column: How it Works & Photo ── */}
                <div className="booking-info">
                    <h2 className="booking-info__title">¿Cómo funciona?</h2>

                    <div className="booking-steps">
                        {bookingSteps.map((step) => (
                            <div className="booking-step" key={step.id}>
                                <span className="booking-step__number">{step.id}</span>
                                <div className="booking-step__content">
                                    <h3 className="booking-step__title">{step.title}</h3>
                                    <p className="booking-step__description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="booking-info__image-wrapper">
                        <img
                            src="/team_office.jpg"
                            alt="Visita guiada a piso con asesor"
                        />
                    </div>

                    {/* Dark Help Card */}
                    <div className="booking-help-card">
                        <p className="booking-help-card__badge">¿TIENES ALGUNA DUDA?</p>
                        <p className="booking-help-card__text">
                            Si necesitas ayuda inmediata o prefieres hablar con nosotros directamente,
                            contáctanos sin compromiso.
                        </p>
                        <a href="/contacto" className="booking-help-card__link">
                            CONTACTAR →
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BookingMain
