import TeamCard from '../ui/TeamCard'
import { teamMembers } from '../../data/team'

/** Team — grid of team member cards pulled from the data layer */
function Team() {
  return (
    <section className="team" id="team">
      <div className="team__inner">

        <div className="team__header">
          <div>
            <p className="section-eyebrow">Las personas detrás de Nido</p>
            <h2 className="section-title">Conoce a nuestro equipo</h2>
          </div>
          <a href="/agentes" className="btn-outline">Ver todos →</a>
        </div>

        <div className="team__grid">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              fullName={member.fullName}
              jobTitle={member.jobTitle}
              description={member.description}
              initials={member.initials}
              accentColor={member.accentColor}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team
