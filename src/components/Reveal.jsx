import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</Tag>
}

export function CountUp({ end, suffix = '', duration = 1300 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setValue(end)
      return undefined
    }
    let started = false
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return
      started = true
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setValue(Math.round(end * eased))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.8 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{value}{suffix}</span>
}
