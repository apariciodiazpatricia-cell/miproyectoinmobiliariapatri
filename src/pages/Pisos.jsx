import ListingsHero     from '../components/sections/ListingsHero'
import PropertyListing from '../components/sections/PropertyListing'

/** PropertiesPage — full property listing with hero and interactive neighborhood filter */
function PropertiesPage() {
  return (
    <main>
      <ListingsHero />
      <PropertyListing />
    </main>
  )
}

export default PropertiesPage
