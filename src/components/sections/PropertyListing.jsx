import { useState } from 'react'
import PropertyCard from '../ui/PropertyCard'
import { featuredProperties } from '../../data/properties'

/**
 * Derives unique neighborhood names from the properties data automatically.
 * "Todos" is the first option (show all listings).
 */
const ALL_NEIGHBORHOODS_LABEL = 'Todos'

const neighborhoodFilters = [
  ALL_NEIGHBORHOODS_LABEL,
  ...new Set(featuredProperties.map((property) => property.neighborhood)),
]

/**
 * PropertyListing — interactive property grid with neighborhood filter tabs
 * and a live count of matching results.
 */
function PropertyListing() {
  const [activeFilter, setActiveFilter] = useState(ALL_NEIGHBORHOODS_LABEL)

  /* Recalculate visible properties whenever the active filter changes */
  const visibleProperties =
    activeFilter === ALL_NEIGHBORHOODS_LABEL
      ? featuredProperties
      : featuredProperties.filter((p) => p.neighborhood === activeFilter)

  return (
    <section className="property-listing" id="listings-grid">
      <div className="property-listing__inner">

        {/* ── Section header: title + live count ── */}
        <div className="property-listing__header">
          <div>
            <p className="section-eyebrow">Estos pisos te pueden interesar</p>
            <h2 className="section-title">Pisos disponibles</h2>
          </div>
          <p className="property-listing__count">
            <span>{visibleProperties.length}</span> propiedades encontradas
          </p>
        </div>

        {/* ── Neighborhood filter tabs ── */}
        <div className="property-filter" role="group" aria-label="Filtrar por barrio">
          {neighborhoodFilters.map((neighborhood) => (
            <button
              key={neighborhood}
              className={`property-filter__btn${
                activeFilter === neighborhood ? ' property-filter__btn--active' : ''
              }`}
              onClick={() => setActiveFilter(neighborhood)}
            >
              {neighborhood}
            </button>
          ))}
        </div>

        {/* ── Properties grid ── */}
        <div className="property-listing__grid">
          {visibleProperties.map((property) => (
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

        {/* ── Empty state ── */}
        {visibleProperties.length === 0 && (
          <p className="property-listing__empty">
            No hay pisos disponibles en esta zona de momento. Prueba con otro barrio.
          </p>
        )}

      </div>
    </section>
  )
}

export default PropertyListing
