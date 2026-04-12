import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__logo-diamond">◇</span>
          <div>
            <span className="nav__logo-name">LUCENTT</span>
            <span className="nav__logo-sub">ARCHITECTS</span>
          </div>
        </a>

        <div className={`nav__menu ${open ? 'nav__menu--open' : ''}`}>
          <ul className="nav__links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav__link" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--glow nav__cta-mobile" onClick={() => setOpen(false)}>
            Let&rsquo;s Talk
          </a>
        </div>

        <a href="#contact" className="btn btn--glow nav__cta">Let&rsquo;s Talk</a>

        <button className="nav__hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className="nav__backdrop" onClick={() => setOpen(false)} />}
    </nav>
  )
}
