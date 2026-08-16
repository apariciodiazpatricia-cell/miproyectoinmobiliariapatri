import AgentsHero from '../components/sections/AgentsHero'
import AgentsStats from '../components/sections/AgentsStats'
import AgentsGrid from '../components/sections/AgentsGrid'
import AgentsServices from '../components/sections/AgentsServices'
import CtaSection from '../components/sections/CtaSection'

/**
 * Agents page — Assembles all sections matching the Figma Agents design
 */
function Agents() {
    return (
        <main>
            <AgentsHero />
            <AgentsStats />
            <AgentsGrid />
            <AgentsServices />
            <CtaSection />
        </main>
    )
}

export default Agents
