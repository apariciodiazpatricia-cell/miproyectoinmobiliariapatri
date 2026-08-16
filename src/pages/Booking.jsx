import BookingHero from '../components/sections/BookingHero'
import BookingMain from '../components/sections/BookingMain'

/**
 * Booking page — Assembles the hero and booking form sections matching Figma
 */
function Booking() {
    return (
        <main>
            <BookingHero />
            <BookingMain />
        </main>
    )
}

export default Booking
