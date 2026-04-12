import { Send } from 'lucide-react'

export default function ContactForm() {
  return (
    <form className="contact__form anim-up anim-d2" onSubmit={e => e.preventDefault()}>
      <div className="form__row">
        <input type="text" placeholder="Your Name" className="form__input" required />
        <input type="email" placeholder="Email Address" className="form__input" required />
      </div>
      <input type="text" placeholder="Subject" className="form__input" />
      <textarea placeholder="Tell us about your project..." className="form__input form__textarea" rows={5} required />
      <button type="submit" className="btn btn--glow btn--lg form__btn">
        Send Message <Send size={16} />
      </button>
    </form>
  )
}
