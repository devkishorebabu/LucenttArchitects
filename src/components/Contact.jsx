import { useInView } from '../hooks/useAnimations'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className={`contact${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="contact__grid">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  )
}
