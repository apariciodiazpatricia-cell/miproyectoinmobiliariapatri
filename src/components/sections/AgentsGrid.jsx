import { Link } from 'react-router-dom'
import { teamMembers } from '../../data/team'

/**
 * AgentsGrid — Displays the 5 team member cards matching the Figma design
 */
function AgentsGrid() {
    return (
        <section className="agents-grid-section" id="agents-team">
            <div className="agents-grid-section__inner">

                <h2 className="agents-grid-section__title">
                    Las personas detrás de Nido
                </h2>

                <div className="agents-grid">
                    {teamMembers.map((member) => (
                        <article className="agent-card" key={member.id}>
                            <div className="agent-card__image-wrapper">
                                <img
                                    src={member.imageSrc}
                                    alt={`Foto de ${member.fullName}`}
                                    className="agent-card__photo"
                                />
                            </div>

                            <div className="agent-card__body">
                                <h3 className="agent-card__name">{member.fullName}</h3>
                                <p className="agent-card__role">{member.jobTitle}</p>
                                <p className="agent-card__specialty">{member.specialty}</p>

                                <Link to="/contacto" className="agent-card__link">
                                    CONTACTAR →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AgentsGrid
