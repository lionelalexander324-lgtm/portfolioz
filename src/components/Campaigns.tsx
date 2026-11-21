import { useEffect, useState } from 'react'
import { ExternalLink, Plus, X } from 'lucide-react'
import { campaigns } from '../data/portfolio'

export function Campaigns() {
  const [expanded, setExpanded] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [])
  const visible = expanded ? campaigns : campaigns.slice(0, 4)
  return <section id="campaigns" className="campaigns light-section work-section cover-panel cover-panel-1">
    <header className="work-heading"><div><span>01 / CAMPAIGNS</span><h2>活动企划</h2></div><p>活动机制、英文文案、视觉物料与执行协同。</p></header>
    <div className="campaign-grid">
      {visible.map((item, index) => <article className={`campaign-card card-${index % 3}`} key={item.id}>
        <button type="button" className="campaign-image" onClick={() => setSelected(campaigns.indexOf(item))} aria-label={`放大查看 ${item.title}`}><img src={item.image} alt={item.alt} loading="lazy" /></button>
        <div className="campaign-meta"><div><small>{String(campaigns.indexOf(item) + 1).padStart(2, '0')} / {campaigns.length}</small><h3>{item.title}</h3><p>{item.description}</p></div>{item.url && <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`打开 ${item.title} 活动网页`}><ExternalLink size={18} />打开网页</a>}</div>
      </article>)}
    </div>
    {!expanded && <button className="expand-button" type="button" onClick={() => setExpanded(true)}><Plus size={20} />查看全部作品</button>}
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${campaigns[selected].title} 图片预览`} onClick={() => setSelected(null)}>
      <button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="关闭预览"><X /></button>
      <figure onClick={e => e.stopPropagation()}><img src={campaigns[selected].image} alt={campaigns[selected].alt} /><figcaption>{campaigns[selected].title}</figcaption></figure>
    </div>}
  </section>
}
