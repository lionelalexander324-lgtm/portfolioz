import { motion } from 'framer-motion'
import { RevealText } from './RevealText'

const copy = '你好，我是张雅书。关注活动创意与用户体验，拥有海外社交 APP 活动策划、执行统筹和视觉内容制作经验。我喜欢把一个想法，从活动机制、页面与素材设计，推进到真正上线。'

export function About() {
  return <section id="about" className="about section-dark">
    <div className="orb orb-a" /><div className="orb orb-b" /><div className="asterisk">✳</div>
    <motion.div className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>ABOUT / 关于我</motion.div>
    <motion.h2 className="display-title gradient-title" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8 }}>ABOUT ME.</motion.h2>
    <RevealText text={copy} />
    <a className="ghost-link" href="#work-index">查看作品</a>
  </section>
}
