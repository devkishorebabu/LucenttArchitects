import { Home, Building2, Ruler, PenTool, TreePine, HardHat } from 'lucide-react'
import { useInView } from '../hooks/useAnimations'

const services = [
  { Icon: Home,     title: 'Residential Design',     desc: 'Bespoke homes that reflect your personality — from cosy villas to sprawling estates.' },
  { Icon: Building2, title: 'Commercial Spaces',      desc: 'Offices, retail & hospitality environments designed to make an impression.' },
  { Icon: Ruler,    title: 'Structural Planning',     desc: 'Rock-solid structural blueprints approved with precision engineering.' },
  { Icon: PenTool,  title: 'Interior Concepts',       desc: 'Curated interiors that seamlessly extend the architectural language.' },
  { Icon: TreePine, title: 'Landscape & Outdoor',     desc: 'Gardens, courtyards and outdoor living spaces that breathe life into any plot.' },
  { Icon: HardHat,  title: 'Project Management',      desc: 'On-time, on-budget delivery with full construction supervision.' },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className={`services${inView ? ' in-view' : ''}`} ref={ref}>
      <span className="services__tag anim-up">What We Offer</span>
      <h2 className="services__heading anim-up anim-d1">
        Comprehensive <span className="services__heading-accent">Solutions</span>
      </h2>

      <div className="services__grid">
        {services.map(({ Icon, title, desc }, i) => (
          <div key={title} className="svc anim-up" style={{ '--i': i }}>
            <span className="svc__icon"><Icon size={26} strokeWidth={1.5} /></span>
            <h3 className="svc__title">{title}</h3>
            <p className="svc__desc">{desc}</p>
            <span className="svc__num">{String(i + 1).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
