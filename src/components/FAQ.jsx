import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './Reveal'

const faqs = [
  ['How do I book an appointment?', 'Use the appointment form above and tell us which department or specialist you would like to see. A member of our care team will contact you with the available time.'],
  ['Can I choose a specific specialist?', 'Yes. You can select a preferred specialist in the appointment form. If they are not available for your requested date, our team will suggest the closest alternative.'],
  ['Do you provide emergency care?', 'Our urgent care team is available 24 / 7. For immediate assistance, call +91 22 4012 4800 or come directly to the Emergency Care entrance.'],
  ['What should I bring to my appointment?', 'Please bring a photo ID, any relevant medical records, a current medication list and your insurance or payment details if applicable.'],
  ['Can I change my appointment date?', 'Of course. Call our care team as soon as you know you need to make a change, and we will help find another suitable time.'],
  ['How can I contact the hospital?', 'For general enquiries, call +91 22 4012 4800 or write to care@vitalcare.in. Urgent support is available 24 / 7.'],
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section faq-section" id="faq">
      <div className="section-label"><span>08</span><span>/</span><span>QUESTIONS, ANSWERED</span></div>
      <div className="faq-layout">
        <Reveal as="h2" className="display-heading">A little more<br /><em>clarity.</em></Reveal>
        <Reveal className="faq-list" delay={120}>
          {faqs.map(([question, answer], index) => {
            const answerId = `faq-answer-${index + 1}`
            return <div className={`faq-item ${open === index ? 'is-open' : ''}`} key={question}>
              <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} aria-controls={answerId}>
                <span className="faq-index">0{index + 1}</span><span>{question}</span><Plus className="faq-plus" size={18} aria-hidden="true" />
              </button>
              <div id={answerId} className="faq-answer" role="region" aria-hidden={open !== index}><p>{answer}</p></div>
            </div>
          })}
        </Reveal>
      </div>
    </section>
  )
}
