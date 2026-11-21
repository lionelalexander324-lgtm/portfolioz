import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Navbar } from './Navbar'
import { AvatarInteraction } from './AvatarInteraction'

export function Hero() {
  return <section id="top" className="hero">
    <Navbar />
    <div className="hero-kicker"><span>CREATIVE PORTFOLIO</span><span>SHANGHAI · 2026</span></div>
    <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .82, ease: [.22, 1, .36, 1] }} aria-label="你好，我是张雅书"><span className="hero-title-line">你好，</span><span className="hero-title-line">我是张雅书</span></motion.h1>
    <AvatarInteraction />
    <motion.div className="hero-bottom" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .65 }}>
      <p>海外社交 APP 运营<br />活动策划 · AI 视觉创作</p>
      <a className="cta" href="#campaigns"><Sparkles size={18} aria-hidden="true" />探索作品</a>
    </motion.div>
  </section>
}
