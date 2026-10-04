import { Reveal } from './Reveal'

export default function CareExperience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-layout">
        <div className="experience-visuals">
          <Reveal className="experience-image experience-image-a"><img src="/assets/nurse-patient.jpg" alt="A nurse speaking with a patient in a quiet care setting" /></Reveal>
          <Reveal className="experience-image experience-image-b" delay={90}><img src="/assets/warm-corridor.jpg" alt="A softly lit hospital corridor" /></Reveal>
          <Reveal className="experience-image experience-image-c" delay={160}><img src="/assets/doctor-consultation.jpg" alt="A doctor listening carefully during a consultation" /></Reveal>
          <div className="experience-olive" />
          <div className="experience-coordinate">19° 04′ N<br />72° 52′ E</div>
        </div>
        <Reveal className="experience-copy" delay={120}>
          <div className="section-label light"><span>04</span><span>/</span><span>THE VITALCARE DIFFERENCE</span></div>
          <h2 className="display-heading light-heading">Good medicine<br />is more than <em>treatment.</em></h2>
          <p>It is the confidence of knowing who is looking after you, what comes next, and why.</p>
          <div className="experience-rule" />
          <div className="experience-caption">Care is a practice of attention.<br />We make room for it.</div>
        </Reveal>
      </div>
    </section>
  )
}
