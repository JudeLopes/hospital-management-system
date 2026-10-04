import { Reveal } from './Reveal'

export default function PatientStory() {
  return (
    <section className="story-section" id="patient-care">
      <div className="story-image"><img src="/assets/nurse-patient.jpg" alt="A nurse offering attentive care to a patient" /></div>
      <div className="story-content">
        <div className="section-label"><span>06</span><span>/</span><span>REPRESENTATIVE PATIENT EXPERIENCE</span></div>
        <Reveal as="blockquote" className="story-quote">“The difference was not only in the treatment. It was knowing that someone was paying attention at every step.”</Reveal>
        <Reveal className="story-bottom" delay={120}><span>CARE</span><span>/</span><span>CONTINUITY</span><span>/</span><span>TRUST</span></Reveal>
      </div>
    </section>
  )
}
