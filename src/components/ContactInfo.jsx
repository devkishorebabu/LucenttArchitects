import { MapPin, Phone, Mail, Instagram } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="contact__info">
      <span className="contact__tag anim-up">Get In Touch</span>
      <h2 className="contact__heading anim-up anim-d1">
        Let's Build Your <span className="contact__heading-accent">Vision</span>
      </h2>
      <p className="contact__desc anim-up anim-d2">
        Ready to transform your space? We'd love to hear about your project.
      </p>

      <div className="contact__pills anim-up anim-d3">
        <a href="https://maps.google.com/?q=Tadpatri,Andhra+Pradesh" className="pill" target="_blank" rel="noopener noreferrer">
          <MapPin size={16} /> Tadpatri, Andhra Pradesh
        </a>
        <a href="tel:+919999999999" className="pill">
          <Phone size={16} /> +91 99999 99999
        </a>
        <a href="mailto:hello@lucenttarchitects.com" className="pill">
          <Mail size={16} /> hello@lucenttarchitects.com
        </a>
      </div>

      <a
        href="https://www.instagram.com/lucenttarchitects/"
        className="contact__insta anim-up anim-d4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={20} />
        <span>
          <strong>Follow us on Instagram</strong>
          <small>@lucenttarchitects</small>
        </span>
      </a>
    </div>
  )
}
