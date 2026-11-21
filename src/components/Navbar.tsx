import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [['关于我', '#about'], ['作品目录', '#work-index'], ['精选作品', '#campaigns'], ['联系方式', '#contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <motion.header className="nav" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
    <a className="nav-brand" href="#top" aria-label="返回首页">ZY<span>®</span></a>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="主导航">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <button className="nav-toggle" type="button" aria-expanded={open} aria-label={open ? '关闭菜单' : '打开菜单'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </motion.header>
}
