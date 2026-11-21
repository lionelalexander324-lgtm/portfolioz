import { webProjects } from '../data/portfolio'
import { StackingCard } from './StackingCard'

export function WebExperiences() {
  return <section id="web" className="web-experiences section-dark work-section cover-panel cover-panel-3">
    <header className="work-heading dark-heading"><div><span>03 / WEB EXPERIENCES</span><h2>互动网页</h2></div><p>真实网页实时加载，可直接进入预览并滚动体验。</p></header>
    <div className="stack-list">{webProjects.map((item, index) => <StackingCard key={item.id} item={item} index={index} total={webProjects.length} />)}</div>
  </section>
}
