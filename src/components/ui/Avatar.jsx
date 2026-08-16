/**
 * Avatar — initials-based circular avatar with dynamic accent color
 * @param {string}  initials    - 1-2 letter abbreviation of the person's name
 * @param {string}  accentColor - CSS color used for text, border and background tint
 * @param {number}  size        - diameter in pixels (default: 90)
 */
function Avatar({ initials, accentColor, size = 90 }) {
  const inlineStyle = {
    width: size,
    height: size,
    background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}88)`,
    border: `3px solid ${accentColor}66`,
    fontSize: `${size * 0.32}px`,
    color: accentColor,
  }

  return (
    <div className="avatar" style={inlineStyle}>
      {initials}
    </div>
  )
}

export default Avatar
