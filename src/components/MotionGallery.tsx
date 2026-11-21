import { useEffect, useRef, useState } from 'react'
import { Pause, Play, X } from 'lucide-react'
import { motionWorks } from '../data/portfolio'

export function MotionGallery() {
  const refs = useRef<(HTMLVideoElement | null)[]>([])
  const [playing, setPlaying] = useState<number | null>(null)
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      const video = entry.target as HTMLVideoElement
      const index = refs.current.indexOf(video)
      if (!entry.isIntersecting || entry.intersectionRatio < .15) { video.pause(); setPlaying(current => current === index ? null : current) }
    }), { threshold: [.15, .65] })
    refs.current.forEach(video => video && observer.observe(video))
    return () => observer.disconnect()
  }, [])

  const toggle = (index: number) => {
    const video = refs.current[index]
    if (!video) return
    if (video.paused) { refs.current.forEach(other => other?.pause()); video.play().then(() => setPlaying(index)).catch(() => setPlaying(null)) }
    else { video.pause(); setPlaying(null) }
  }

  return <section id="motion" className="motion-gallery section-dark work-section">
    <header className="work-heading dark-heading"><div><span>04 / MOTION CREATIONS</span><h2>动态创作</h2></div><p>座位框、座驾与活动动态效果。</p></header>
    <div className="motion-grid">{motionWorks.map((item, index) => <article className={`motion-card motion-${index}`} key={item.id}>
      <div className={`motion-media${item.video ? '' : ' is-poster-only'}`} onDoubleClick={() => item.video && setSelected(index)}>
        {item.video ? <video ref={node => { refs.current[index] = node }} src={item.video} poster={item.poster} muted loop playsInline preload="metadata" aria-label={item.alt} onClick={() => toggle(index)} onPlay={() => setPlaying(index)} onPause={() => setPlaying(current => current === index ? null : current)} /> : <img className="motion-poster" src={item.poster} alt={item.alt} loading="lazy" />}
        {item.video && <button type="button" className="play-button" aria-label={playing === index ? `暂停 ${item.title}` : `播放 ${item.title}`} onClick={() => toggle(index)}>{playing === index ? <Pause /> : <Play />}</button>}
        {item.video ? <button type="button" className="view-video" onClick={() => setSelected(index)}>放大播放</button> : <span className="poster-note">静态预览</span>}
      </div><div className="motion-meta"><small>{String(index + 1).padStart(2, '0')}</small><div><h3>{item.title}</h3><p>{item.description}</p></div></div>
    </article>)}</div>
    {selected !== null && <div className="lightbox video-lightbox" role="dialog" aria-modal="true" aria-label={`${motionWorks[selected].title} 视频预览`} onClick={() => setSelected(null)}>
      <button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="关闭视频"><X /></button>
      <figure onClick={e => e.stopPropagation()}><video src={motionWorks[selected].video} poster={motionWorks[selected].poster} controls autoPlay muted loop playsInline /><figcaption>{motionWorks[selected].title}</figcaption></figure>
    </div>}
  </section>
}
