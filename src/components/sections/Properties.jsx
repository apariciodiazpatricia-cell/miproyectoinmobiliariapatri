import { Link } from 'react-router-dom'
import PropertyCard from '../ui/PropertyCard'
import { featuredProperties } from '../../data/properties'

/** Properties — featured property listing grid pulled from the data layer */
function Properties() {
  return (
    <section className="properties" id="properties">
      <div className="properties__inner">

        <div className="properties__header">
          <div>
            <p className="section-eyebrow">Pisos disponibles</p>
            <h2 className="section-title">Estos pisos te pueden interesar</h2>
          </div>
          <Link to="/pisos" className="btn-outline">Ver todos →</Link>
        </div>

        <div className="properties__grid">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              imageSrc={property.imageSrc}
              badge={property.badge}
              neighborhood={property.neighborhood}
              title={property.title}
              pricePerRoom={property.pricePerRoom}
              roomCount={property.roomCount}
              squareMeters={property.squareMeters}
              floorLabel={property.floorLabel}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Properties
