import { useState } from 'react'
import { contactFaqs } from '../../data/faq'

/**
 * ContactFaq — Interactive FAQ accordion section matching Figma
 */
function ContactFaq() {
    const [openFaqId, setOpenFaqId] = useState(null)

    const toggleFaq = (id) => {
        setOpenFaqId((prevId) => (prevId === id ? null : id))
    }

    return (
        <section className="contact-faq" id="contact-faq">
            <div className="contact-faq__inner">

                <h2 className="contact-faq__title">Preguntas Frecuentes</h2>

                <div className="faq-list">
                    {contactFaqs.map((faq) => {
                        const isOpen = openFaqId === faq.id

                        return (
                            <div
                                key={faq.id}
                                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                            >
                                <button
                                    className="faq-item__trigger"
                                    onClick={() => toggleFaq(faq.id)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="faq-item__question">{faq.question}</span>
                                    <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
                                </button>

                                {isOpen && (
                                    <div className="faq-item__answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default ContactFaq
