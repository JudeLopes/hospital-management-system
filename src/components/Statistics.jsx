import { Reveal, CountUp } from './Reveal'

const stats = [
  { value: 25, suffix: '', label: 'Specialist departments' },
  { value: 120, suffix: '+', label: 'Clinicians' },
  { value: 18, suffix: '', label: 'Years of care' },
  { value: 24, suffix: '/7', label: 'Urgent support' },
]

export default function Statistics() {
  return (
    <section className="stats-section">
      <div className="stats-topline"><span>VITALCARE / AT A GLANCE</span><span>02 — 04</span></div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <Reveal className="stat" key={stat.label} delay={index * 90}>
            <div className="stat-number"><CountUp end={stat.value} suffix={stat.suffix} /></div>
            <div className="stat-label">{stat.label}</div>
            <span className="stat-mark">0{index + 1}</span>
          </Reveal>
        ))}
      </div>
      <div className="stats-note"><span className="terracotta-rule" /> Care, measured in people — not just numbers.</div>
    </section>
  )
}
