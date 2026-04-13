import { useState, useEffect } from 'react'
import { ArrowDown, Play } from 'lucide-react'
import { useCountUp, useInView } from '../hooks/useAnimations'
import HeroSlideshow from './HeroSlideshow'
import HeroShapes from './HeroShapes'
import HeroStats from './HeroStats'

const slides = [
  { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85', alt: 'Modern luxury home with elegant architectural design' },
  { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85', alt: 'Luxury contemporary home exterior' },
  { image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85', alt: 'Premium architectural design at golden hour' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [statsRef, statsInView] = useInView()
  const projects = useCountUp(50, 2000, statsInView)
  const years = useCountUp(8, 1500, statsInView)
  const clients = useCountUp(100, 2500, statsInView)

  useEffect(() => {
    const interval = setInterval(() => setCurrent(i => (i + 1) % slides.length), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <HeroSlideshow slides={slides} current={current} />
      <HeroShapes />

      <div className="hero__content">
        <div className="hero__badge anim-up">
          <span className="hero__badge-dot" />
          Tadpatri &bull; Andhra Pradesh
        </div>

        <h1 className="hero__title">
          <span className="hero__title-word anim-up anim-d1">We Don't Just</span>
          <span className="hero__title-word anim-up anim-d2">Build Structures,</span>
          <span className="hero__title-word hero__accent anim-up anim-d3">We Craft <em>Legacies</em></span>
        </h1>

        <p className="hero__sub anim-up anim-d4">
          Award-worthy architecture that tells your story.
          Every line drawn with purpose, every space designed with soul.
        </p>

        <div className="hero__btns anim-up anim-d5">
          <a href="#projects" className="btn btn--glow btn--lg">
            View Our Work <span className="btn__arrow">→</span>
          </a>
          <a href="#contact" className="btn btn--glass btn--lg">
            <Play size={15} /> Start a Project
          </a>
        </div>
      </div>

      <div ref={statsRef}>
        <HeroStats
          projects={projects} years={years} clients={clients}
          slides={slides} current={current} onSlideChange={setCurrent}
        />
      </div>

      <a href="#about" className="hero__scroll">
        <span>Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  )
}
