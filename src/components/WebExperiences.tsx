import { webProjects } from '../data/portfolio'
import { StackingCard } from './StackingCard'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

export function WebExperiences() {
  return <section id="web" className="web-experiences section-dark work-section cover-panel cover-panel-3">
    <header className="work-heading dark-heading"><div><span>03 / WEB EXPERIENCES</span><h2>互动网页</h2></div><p>真实网页实时加载，可直接进入预览并滚动体验。</p></header>
    <ScrollStack className="web-stack" useWindowScroll smoothScroll={false} itemDistance={110} itemStackDistance={22} stackPosition="8%" itemScale={.04} baseScale={.84} dimAmount={.14} holdDistance={180}>
      {webProjects.map((item, index) => <ScrollStackItem itemClassName={`web-scroll-card web-scroll-${index}`} key={item.id}>
        <StackingCard item={item} index={index} />
      </ScrollStackItem>)}
    </ScrollStack>
  </section>
}
