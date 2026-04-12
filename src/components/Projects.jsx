import { useState } from 'react'
import { useInView } from '../hooks/useAnimations'

const projects = [
  { title: 'Villa Sereno',        tag: 'Residential',  size: 'proj--lg',  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85' },
  { title: 'Nexus Business Hub',  tag: 'Commercial',   size: 'proj--sm',  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85' },
  { title: 'Zen Garden Retreat',  tag: 'Landscape',    size: 'proj--sm',  image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=85' },
  { title: 'The Glass Pavilion',  tag: 'Residential',  size: 'proj--lg',  image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=85' },
  { title: 'Skyline Towers',     tag: 'Commercial',   size: 'proj--full', image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&q=85' },
]

export default function Projects() {
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className={`projects${inView ? ' in-view' : ''}`} ref={ref}>
      <span className="projects__tag anim-up">Portfolio</span>
      <h2 className="projects__heading anim-up anim-d1">
        Selected <span className="projects__heading-accent">Works</span>
      </h2>

      <div className="projects__masonry">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`proj ${p.size} anim-up`}
            style={{ '--i': i }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={p.image} alt={p.title} loading="lazy" />
            <div className={`proj__overlay${hovered === i ? ' proj__overlay--active' : ''}`}>
              <span className="proj__tag">{p.tag}</span>
              <h3 className="proj__title">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
