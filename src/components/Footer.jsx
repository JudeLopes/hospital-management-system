import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><span className="eyebrow">VITALCARE / HOSPITAL · MEDICAL CENTRE</span><h2>Care,<br /><em>considered.</em></h2><button className="footer-link" onClick={() => go('appointment')}>BOOK AN APPOINTMENT <ArrowUpRight size={15} /></button></div>
        <div className="footer-nav"><span className="footer-heading">EXPLORE</span><button onClick={() => go('departments')}>Services</button><button onClick={() => go('specialists')}>Specialists</button><button onClick={() => go('experience')}>Patient Care</button><button onClick={() => go('approach')}>About</button><button onClick={() => go('faq')}>FAQ</button></div>
        <div className="footer-contact"><span className="footer-heading">EMERGENCY SUPPORT</span><strong>24 / 7 URGENT CARE</strong><a href="tel:+912240124800">+91 22 4012 4800</a><a href="mailto:care@vitalcare.in">care@vitalcare.in</a><span className="footer-address">VitalCare Hospital<br />42 Nepean Sea Road<br />Mumbai 400 006</span></div>
      </div>
      <div className="footer-bottom"><span>VITALCARE / HOSPITAL MANAGEMENT SYSTEM</span><span>EST. 2008</span><span>© 2026</span></div>
    </footer>
  )
}
