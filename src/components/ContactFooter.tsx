import { contact } from '../data/portfolio'

export function ContactFooter() {
  const hasContact = Boolean(contact.contactEmail || contact.resumeUrl || contact.socialUrl)
  return <footer id="contact" className="footer">
    <div><span>LET'S CONNECT.</span><h2>期待与你合作</h2><p>从活动策划到上线执行，把有趣的想法认真落地。</p></div>
    {hasContact ? <div className="contact-links">{contact.contactEmail && <a href={`mailto:${contact.contactEmail}`}>发送邮件</a>}{contact.resumeUrl && <a href={contact.resumeUrl}>查看简历</a>}</div> : <p className="contact-todo">联系方式待补充 · TODO_ASSET</p>}
    <div className="footer-bottom"><span>ZHANG YASHU © 2026</span><a href="#top">返回顶部</a></div>
  </footer>
}
