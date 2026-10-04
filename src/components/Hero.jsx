import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal className="eyebrow">VITALCARE <span>/</span> PATIENT-FIRST MEDICINE</Reveal>
          <Reveal as="h1" className="hero-title" delay={80}>Care,<br /><em>considered.</em></Reveal>
          <Reveal className="hero-intro" delay={150}>Thoughtful medicine, experienced specialists and a connected approach to every patient's journey.</Reveal>
          <Reveal className="hero-actions" delay={220}>
            <button className="button button-dark" onClick={() => go('appointment')}>BOOK AN APPOINTMENT <ArrowUpRight size={15} /></button>
            <button className="text-link" onClick={() => go('approach')}>EXPLORE OUR CARE <ArrowDown size={14} /></button>
          </Reveal>
          <Reveal className="hero-footnote" delay={300}>A connected care team<br />for the moments that matter.</Reveal>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src="/assets/hero-consultation.jpg" alt="Doctor consulting with a patient in a warm, modern clinic" />
          </div>
          <div className="hero-line hero-line-top" />
          <div className="hero-line hero-line-bottom" />
          <div className="hero-coordinates">19.0760° N<br />72.8777° E</div>
          <div className="hero-meta"><span>EST. 2008</span><span>24 / 7 CARE</span></div>
          <div className="hero-index">01 <span>/ 08</span></div>
        </div>
      </div>
      <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  )
}
