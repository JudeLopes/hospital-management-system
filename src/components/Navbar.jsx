import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  ['Services', 'departments'],
  ['Specialists', 'specialists'],
  ['About', 'approach'],
  ['Patient Care', 'experience'],
  ['FAQ', 'faq'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-28% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    if (open) document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header ref={headerRef} className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="wordmark" onClick={() => go('top')} aria-label="Back to top">
          <span className="wordmark-name">VITALCARE</span>
          <span className="wordmark-meta"><i /> HOSPITAL · MEDICAL CENTRE</span>
        </button>
        <nav id="primary-navigation" className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, id]) => <button key={id} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => go(id)}>{label}</button>)}
          <button className="nav-mobile-cta" onClick={() => go('appointment')}>BOOK AN APPOINTMENT <ArrowUpRight size={14} /></button>
        </nav>
        <button className="nav-cta" onClick={() => go('appointment')}>BOOK AN APPOINTMENT <ArrowUpRight size={14} /></button>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </header>
  )
}
