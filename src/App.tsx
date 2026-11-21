import { Hero } from './components/Hero'
import { WorkMarquee } from './components/WorkMarquee'
import { About } from './components/About'
import { WorkIndex } from './components/WorkIndex'
import { Campaigns } from './components/Campaigns'
import { SplashVisuals } from './components/SplashVisuals'
import { WebExperiences } from './components/WebExperiences'
import { MotionGallery } from './components/MotionGallery'
import { ContactFooter } from './components/ContactFooter'

export default function App() {
  return <main>
    <Hero />
    <WorkMarquee />
    <About />
    <WorkIndex />
    <Campaigns />
    <SplashVisuals />
    <WebExperiences />
    <MotionGallery />
    <ContactFooter />
  </main>
}
