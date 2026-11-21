import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { splashVisuals } from '../data/portfolio'

export function SplashVisuals() {
  const [selected, setSelected] = useState<number | null>(null)
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [])
  return <section id="splash" className="splash light-section work-section cover-panel cover-panel-2">
    <header className="work-heading"><div><span>02 / VISUAL DESIGN</span><h2>启动视觉</h2></div><p>完整保留竖版比例，点击查看原图。</p></header>
    <div className="splash-grid">{splashVisuals.map((item, index) => <article key={item.id} className="splash-card">
      <button type="button" onClick={() => setSelected(index)} aria-label={`查看完整 ${item.title} 启动页`}><img src={item.image} alt={item.alt} loading="lazy" /></button><div><small>LAUNCH SCREEN</small><h3>{item.title}</h3></div>
    </article>)}</div>
    {selected !== null && <div className="lightbox splash-lightbox" role="dialog" aria-modal="true" aria-label={`${splashVisuals[selected].title} 启动页预览`} onClick={() => setSelected(null)}>
      <button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="关闭预览"><X /></button>
      <figure onClick={e => e.stopPropagation()}><img src={splashVisuals[selected].image} alt={splashVisuals[selected].alt} /><figcaption>{splashVisuals[selected].title}</figcaption></figure>
    </div>}
  </section>
}
