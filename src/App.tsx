import { Hero } from './components/Hero'
import { WorkMarquee } from './components/WorkMarquee'
import { About } from './components/About'
import { WorkIndex } from './components/WorkIndex'
import { Campaigns } from './components/Campaigns'
import { SplashVisuals } from './components/SplashVisuals'
import { WebExperiences } from './components/WebExperiences'
import { MotionGallery } from './components/MotionGallery'
import { ContactFooter } from './components/ContactFooter'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'

export default function App() {
  return <main>
    <Hero />
    <WorkMarquee />
    <About />
    <WorkIndex />
    <ScrollStack className="section-stack" useWindowScroll smoothScroll={false} itemDistance={80} itemStackDistance={18} stackPosition="2%" itemScale={.018} baseScale={.93} dimAmount={.08} holdDistance={120}>
      <ScrollStackItem itemClassName="portfolio-section-card section-card-campaign"><Campaigns /></ScrollStackItem>
      <ScrollStackItem itemClassName="portfolio-section-card section-card-splash"><SplashVisuals /></ScrollStackItem>
      <ScrollStackItem itemClassName="portfolio-section-card section-card-web"><WebExperiences /></ScrollStackItem>
      <ScrollStackItem itemClassName="portfolio-section-card section-card-motion"><MotionGallery /></ScrollStackItem>
    </ScrollStack>
    <ContactFooter />
  </main>
}
