import { Reveal } from './Reveal'

export default function Intro() {
  return (
    <section className="section intro-section" id="approach">
      <div className="section-label"><span>01</span><span>/</span><span>OUR APPROACH</span></div>
      <Reveal as="h2" className="display-heading intro-heading">Healthcare should feel<br /><em>clear, connected</em><br />and personal.</Reveal>
      <div className="intro-columns">
        <Reveal className="intro-aside" delay={120}>
          <span className="accent-dot" />
          <p>Not all care journeys look the same. Our work begins by making yours feel understood.</p>
        </Reveal>
        <Reveal className="intro-copy" delay={180}>
          <p>At VitalCare, patient-first care is not a promise on a wall. It is the way our specialists share context, our diagnostics sharpen decisions, and our teams stay close to what comes next.</p>
          <p>From a first consultation to continuity of treatment, we bring clinical depth and human attention into the same room — so healthcare feels less fragmented, and more like a conversation you can follow.</p>
          <a className="underlined-link" href="#departments">OUR AREAS OF CARE <span>↗</span></a>
        </Reveal>
      </div>
    </section>
  )
}
