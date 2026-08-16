import { useState } from 'react'

/**
 * ContactMain — Main contact block (Info + Interactive Form) on white background
 */
function ContactMain() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        subject: 'Información sobre un piso',
        message: '',
        acceptTerms: false,
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.acceptTerms) {
            alert('Por favor, acepta la política de privacidad para continuar.')
            return
        }
        // Form submission feedback
        setIsSubmitted(true)
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    return (
        <section className="contact-main" id="contact-form-section">
            <div className="contact-main__inner">

                {/* ── Left Column: Contact Details ── */}
                <div className="contact-info">
                    <h2 className="contact-info__title">Contacta con nosotros</h2>
                    <p className="contact-info__intro">
                        Nuestro equipo está disponible para resolver tus dudas rápidamente.
                        Preferimos atenderte con cita previa, mientras esté disponible.
                    </p>

                    <div className="contact-info__list">
                        <div className="contact-info__item">
                            <span className="contact-info__icon">📍</span>
                            <div>
                                <span className="contact-info__label">DIRECCIÓN</span>
                                <p className="contact-info__value">Calle Recogidas 42, Granada, España</p>
                            </div>
                        </div>

                        <div className="contact-info__item">
                            <span className="contact-info__icon">📞</span>
                            <div>
                                <span className="contact-info__label">TELÉFONO</span>
                                <p className="contact-info__value">+34 958 00 00 00</p>
                            </div>
                        </div>

                        <div className="contact-info__item">
                            <span className="contact-info__icon">✉️</span>
                            <div>
                                <span className="contact-info__label">EMAIL</span>
                                <p className="contact-info__value">info@nidoestudiantil.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-info__schedule">
                        <span className="contact-info__label">HORARIO</span>
                        <p>Lunes - Viernes: 09:00 - 19:30</p>
                        <p>Sábados: 10:00 - 14:00</p>
                    </div>

                    <div className="contact-info__social">
                        <span className="contact-info__label">SÍGUENOS</span>
                        <div className="contact-info__social-links">
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="WhatsApp">💬</a>
                        </div>
                    </div>
                </div>

                {/* ── Right Column: Interactive Form ── */}
                <div className="contact-form-wrapper">
                    <h2 className="contact-form-wrapper__title">Envíanos un mensaje</h2>

                    {isSubmitted ? (
                        <div className="contact-form__success">
                            <span className="contact-form__success-icon">✅</span>
                            <h3>¡Mensaje enviado con éxito!</h3>
                            <p>Nos pondremos en contacto contigo en menos de 24 horas laborables.</p>
                            <button
                                className="btn-primary"
                                onClick={() => setIsSubmitted(false)}
                                style={{ marginTop: '1.5rem' }}
                            >
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-form__row">
                                <div className="contact-form__group">
                                    <label htmlFor="fullName">NOMBRE COMPLETO</label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Tu nombre"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="contact-form__group">
                                    <label htmlFor="phone">TELÉFONO</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Tu teléfono"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="contact-form__group">
                                <label htmlFor="email">EMAIL</label>
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

                            <div className="contact-form__group">
                                <label htmlFor="subject">ASUNTO</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >
                                    <option value="Información sobre un piso">Información sobre un piso</option>
                                    <option value="Reservar una visita">Reservar una visita</option>
                                    <option value="Dudas sobre contratos">Dudas sobre contratos</option>
                                    <option value="Otro asunto">Otro asunto</option>
                                </select>
                            </div>

                            <div className="contact-form__group">
                                <label htmlFor="message">MENSAJE</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="¿En qué podemos ayudarte?"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <label className="contact-form__checkbox">
                                <input
                                    type="checkbox"
                                    name="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleChange}
                                    required
                                />
                                <span>
                                    He leído y acepto la política de privacidad y el tratamiento
                                    de mis datos para la gestión de mi consulta.
                                </span>
                            </label>

                            <button type="submit" className="contact-form__submit-btn">
                                ENVIAR MENSAJE
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </section>
    )
}

export default ContactMain
