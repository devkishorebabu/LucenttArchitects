import { Instagram, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#home" className="footer__logo">
          L<span className="footer__logo-accent">.</span>
        </a>

        <nav className="footer__nav">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="footer__link">
              {link}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/lucenttarchitects/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <Instagram size={18} />
          </a>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Lucentt Architects. All rights reserved.</p>
          <a href="#home" className="footer__top-btn">
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
