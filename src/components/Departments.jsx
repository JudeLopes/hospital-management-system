import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { Reveal } from './Reveal'

const departments = [
  { number: '01', name: 'Cardiology', text: 'Heart health with a longer view — from prevention to recovery.', services: 'Preventive cardiology, cardiac imaging and heart failure care.', specialist: 'Dr. Maya Shah', image: '/assets/doctor-consultation.jpg' },
  { number: '02', name: 'Neurology', text: 'Clear thinking, careful listening and advanced neurological care.', services: 'Neurological assessment, stroke care and long-term support.', specialist: 'Dr. Arjun Mehta', image: '/assets/hero-consultation.jpg' },
  { number: '03', name: 'Orthopedics', text: 'Movement restored through precise diagnosis and thoughtful rehabilitation.', services: 'Joint care, sports medicine and movement rehabilitation.', specialist: 'Dr. Elena Rao', image: '/assets/nurse-patient.jpg' },
  { number: '04', name: 'Pediatrics', text: 'Gentle, expert care for growing bodies and the people around them.', services: 'Well-child care, acute illness and developmental support.', specialist: 'VitalCare pediatric team', image: '/assets/doctor-consultation.jpg' },
  { number: '05', name: 'Diagnostics', text: 'Modern diagnostics that turn uncertainty into the next right step.', services: 'Imaging, laboratory testing and coordinated reporting.', specialist: 'VitalCare diagnostics team', image: '/assets/modern-corridor.jpg' },
  { number: '06', name: 'Emergency Care', text: 'Urgent support, 24 hours a day, with a calm team beside you.', services: 'Immediate assessment, stabilization and onward care.', specialist: '24 / 7 urgent care team', image: '/assets/warm-corridor.jpg' },
]

export default function Departments() {
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState(null)
  const selectDepartment = (index) => { setActive(index); setSelected(selected === index ? null : index) }

  return (
    <section className="section departments-section" id="departments">
      <div className="section-label"><span>03</span><span>/</span><span>AREAS OF CARE</span></div>
      <div className="departments-head">
        <Reveal as="h2" className="display-heading">Medicine,<br /><em>with depth.</em></Reveal>
        <Reveal className="departments-intro" delay={120}>A broad view of health, held by specialists who know when to go deeper.</Reveal>
      </div>
      <div className="department-list">
        {departments.map((item, index) => (
          <Reveal as="div" className={`department-row ${active === index ? 'is-active' : ''} ${selected === index ? 'is-expanded' : ''}`} delay={index * 50} key={item.name}>
            <button aria-expanded={selected === index} aria-controls={`department-detail-${index}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => selectDepartment(index)}>
              <span className="department-number">{item.number}</span>
              <span className="department-name">{item.name}</span>
              <span className="department-description">{item.text}</span>
              <span className="department-arrow"><ArrowUpRight size={19} aria-hidden="true" /></span>
            </button>
            <div className="department-accent" />
            {selected === index && <div id={`department-detail-${index}`} className="department-detail" role="region" aria-label={`${item.name} details`}>
              <div><span className="eyebrow">DEPARTMENT / {item.number}</span><p className="department-detail-description">{item.text}</p></div>
              <p><strong>Key services</strong><br />{item.services}</p>
              <p><strong>Specialist information</strong><br />{item.specialist}</p>
              <button className="department-detail-close" onClick={() => setSelected(null)} aria-label={`Close ${item.name} details`}><X size={18} /></button>
            </div>}
          </Reveal>
        ))}
      </div>
      <div className="department-preview" aria-hidden="true"><img src={departments[active].image} alt="" /><span>FOCUS / {departments[active].number}</span></div>
    </section>
  )
}
