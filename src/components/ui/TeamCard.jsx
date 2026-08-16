/**
 * TeamCard — displays a team member's photo, name, role and short bio
 *
 * @param {string} fullName    - Full name of the team member
 * @param {string} jobTitle    - Position / role title
 * @param {string} description - Short biography or description
 * @param {string} imageSrc    - Path to the agent's profile photo
 * @param {string} initials    - 2-letter fallback initials (if image fails to load)
 * @param {string} accentColor - Accent color for the card border on hover
 */
function TeamCard({ fullName, jobTitle, description, imageSrc, initials, accentColor }) {
  return (
    <article className="team-card">
      <div
        className="team-card__avatar-wrapper"
        style={{ borderColor: accentColor + '44' }}
      >
        <img
          src={imageSrc}
          alt={`Foto de ${fullName}`}
          className="team-card__photo"
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>
      <h3 className="team-card__name">{fullName}</h3>
      <p className="team-card__role" style={{ color: accentColor }}>{jobTitle}</p>
      <p className="team-card__description">{description}</p>
    </article>
  )
}

export default TeamCard
