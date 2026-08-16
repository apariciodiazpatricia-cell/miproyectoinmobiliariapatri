/**
 * PropertyCard — real estate listing card with image, badge, price and details
 * @param {string} imageSrc      - Path to the property image
 * @param {string} badge         - Short availability label (e.g. 'DISPONIBLE')
 * @param {string} neighborhood  - Area / neighborhood name
 * @param {string} title         - Property title
 * @param {number} pricePerRoom  - Monthly price per room in euros
 * @param {string} roomCount     - Number of rooms (e.g. '3 hab.')
 * @param {string} squareMeters  - Floor area (e.g. '75 m²')
 * @param {string} floorLabel    - Floor description (e.g. '2ª planta')
 */
function PropertyCard({
  imageSrc,
  badge,
  neighborhood,
  title,
  pricePerRoom,
  roomCount,
  squareMeters,
  floorLabel,
}) {
  return (
    <article className="property-card">
      <div className="property-card__image-wrapper">
        <img src={imageSrc} alt={title} loading="lazy" />
        <span className="property-card__badge">{badge}</span>
      </div>

      <div className="property-card__body">
        <p className="property-card__neighborhood">{neighborhood}</p>
        <h3 className="property-card__title">{title}</h3>
        <p className="property-card__price">
          {pricePerRoom}€
          <span className="property-card__price-unit">/mes por habitación</span>
        </p>

        <ul className="property-card__details">
          <li className="property-detail">
            <span className="property-detail__icon">🛏</span>
            {roomCount}
          </li>
          <li className="property-detail">
            <span className="property-detail__icon">📐</span>
            {squareMeters}
          </li>
          <li className="property-detail">
            <span className="property-detail__icon">🏢</span>
            {floorLabel}
          </li>
        </ul>
      </div>
    </article>
  )
}

export default PropertyCard
