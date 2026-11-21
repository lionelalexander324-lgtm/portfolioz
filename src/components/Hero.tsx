import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { Navbar } from './Navbar'
import { AvatarInteraction } from './AvatarInteraction'

export function Hero() {
  return <section id="top" className="hero">
    <Navbar />
    <div className="hero-kicker"><span>CREATIVE PORTFOLIO</span><span>SHANGHAI · 2026</span></div>
    <motion.h1 initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .82, ease: [.22, 1, .36, 1] }}><span>张</span><span>雅</span><span>书</span></motion.h1>
    <AvatarInteraction />
    <motion.div className="hero-bottom" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7, duration: .65 }}>
      <p>你好，我是张雅书</p>
      <a className="cta" href="#campaigns"><Sparkles size={18} aria-hidden="true" />探索作品</a>
    </motion.div>
  </section>
}
