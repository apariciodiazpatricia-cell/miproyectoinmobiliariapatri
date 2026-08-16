import ContactHero from '../components/sections/ContactHero'
import ContactMain from '../components/sections/ContactMain'
import ContactMap from '../components/sections/ContactMap'
import ContactFaq from '../components/sections/ContactFaq'
import CtaSection from '../components/sections/CtaSection'

/**
 * Contact page — Assembles all sections matching the Figma Contact design
 */
function Contact() {
    return (
        <main>
            <ContactHero />
            <ContactMain />
            <ContactMap />
            <ContactFaq />
            <CtaSection />
        </main>
    )
}

export default Contact
