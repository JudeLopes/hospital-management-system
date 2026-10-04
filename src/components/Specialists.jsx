import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { Reveal } from './Reveal'

const specialists = [
  { name: 'Dr. Maya Shah', specialty: 'Cardiology', years: '18 years of experience', bio: 'Known for pairing clinical precision with the kind of calm that gives patients room to ask better questions.', expertise: ['Preventive cardiology', 'Heart failure care', 'Cardiac imaging'], image: '/assets/maya-shah.jpg' },
  { name: 'Dr. Arjun Mehta', specialty: 'Neurology', years: '14 years of experience', bio: 'A thoughtful neurologist focused on clarity, collaborative diagnosis and long-term wellbeing.', expertise: ['Stroke care', 'Movement disorders', 'Neurological assessment'], image: '/assets/arjun-mehta.jpg' },
  { name: 'Dr. Elena Rao', specialty: 'Orthopedics', years: '16 years of experience', bio: 'Helping people return to movement with careful planning, honest guidance and a human pace.', expertise: ['Joint replacement', 'Sports medicine', 'Movement rehabilitation'], image: '/assets/elena-rao.jpg' },
]

export default function Specialists() {
  const [selected, setSelected] = useState(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (selected === null) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') closeProfile() }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    closeButtonRef.current?.focus()
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown) }
  }, [selected])

  const openProfile = (doctor, event) => { triggerRef.current = event.currentTarget; setSelected(doctor) }
  const closeProfile = () => {
    setSelected(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }

  return <>
    <section className="section specialists-section" id="specialists">
      <div className="section-label"><span>05</span><span>/</span><span>THE TEAM</span></div>
      <div className="specialists-head"><Reveal as="h2" className="display-heading">Meet the<br /><em>specialists.</em></Reveal><Reveal className="specialists-intro" delay={130}>Expertise matters. So does the person who brings it into the room.</Reveal></div>
      <div className="specialists-grid">
        {specialists.map((doctor, index) => <Reveal className={`specialist-card specialist-${index + 1}`} delay={index * 120} key={doctor.name}>
          <div className="specialist-image"><img src={doctor.image} alt={`${doctor.name}, ${doctor.specialty}`} /></div>
          <div className="specialist-number">0{index + 1}</div>
          <div className="specialist-info"><div className="specialist-topline"><span>{doctor.specialty}</span><span>{doctor.years}</span></div><h3>{doctor.name}</h3><p>{doctor.bio}</p><button className="specialist-link" onClick={(event) => openProfile(doctor, event)} aria-label={`View profile for ${doctor.name}`}>VIEW PROFILE <ArrowUpRight size={14} aria-hidden="true" /></button></div>
        </Reveal>)}
      </div>
    </section>
    {selected && <div className="profile-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeProfile() }}>
      <div className="profile-modal" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <button ref={closeButtonRef} className="profile-close" onClick={closeProfile} aria-label="Close specialist profile"><X size={20} /></button>
        <div className="profile-modal-image"><img src={selected.image} alt="" /></div>
        <div className="profile-modal-copy"><span className="eyebrow">SPECIALIST PROFILE</span><h2 id="profile-title">{selected.name}</h2><p className="profile-specialty">{selected.specialty} · {selected.years}</p><p>{selected.bio}</p><div className="profile-expertise"><span>AREAS OF EXPERTISE</span>{selected.expertise.map((item) => <strong key={item}>{item}</strong>)}</div></div>
      </div>
    </div>}
  </>
}
