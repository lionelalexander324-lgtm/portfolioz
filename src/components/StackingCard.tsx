import { ExternalLink, MousePointer2 } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import type { PortfolioItem } from '../data/portfolio'

export function StackingCard({ item, index, total }: { item: PortfolioItem, index: number, total: number }) {
  const ref = useRef<HTMLElement>(null)
  const [loaded, setLoaded] = useState(false)
  const [interactive, setInteractive] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * .025])
  const host = item.url ? new URL(item.url).hostname.replace('www.', '') : ''
  return <article ref={ref} className="stack-wrap">
    <motion.div className={`stack-card stack-${index}`} style={{ scale, top: `${92 + index * 18}px` }}>
      <div className="stack-copy"><span>0{index + 1} / WEB EXPERIENCE</span><h3>{item.title}</h3><p>{item.description}</p>{item.url && <a href={item.url} target="_blank" rel="noopener noreferrer"><ExternalLink size={18} />打开网页</a>}</div>
      <div className="stack-shot">
        <div className="live-preview">
          <div className="preview-bar">
            <span className="preview-dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="preview-host"><b>LIVE</b>{host}</span>
            <button type="button" aria-pressed={interactive} onClick={() => setInteractive(!interactive)}><MousePointer2 size={15} />{interactive ? '退出预览' : '进入实时预览'}</button>
          </div>
          <div className="preview-window">
            <img className={loaded ? 'preview-fallback is-loaded' : 'preview-fallback'} src={item.image} alt={item.alt} loading="lazy" />
            {item.url && <iframe className={`${loaded ? 'is-loaded' : ''} ${interactive ? 'is-interactive' : ''}`} src={item.url} title={`${item.title} 实时网页预览`} loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" referrerPolicy="no-referrer" tabIndex={interactive ? 0 : -1} onLoad={() => setLoaded(true)} />}
            {!loaded && <span className="preview-loading">正在载入真实网页…</span>}
          </div>
        </div>
      </div>
    </motion.div>
  </article>
}
