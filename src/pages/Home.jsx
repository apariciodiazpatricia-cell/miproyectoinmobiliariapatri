import Hero       from '../components/sections/Hero'
import StatsBar   from '../components/sections/StatsBar'
import Expertise  from '../components/sections/Expertise'
import Team       from '../components/sections/Team'
import Properties from '../components/sections/Properties'
import CtaSection from '../components/sections/CtaSection'

/** Home page — composes all landing page sections in order */
function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Expertise />
      <Team />
      <Properties />
      <CtaSection />
    </main>
  )
}

export default Home