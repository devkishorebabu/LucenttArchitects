import { useInView } from '../hooks/useAnimations'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={`about${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="about__grid">
        <div className="about__images">
          <div className="about__img-main">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=85"
              alt="Luxurious modern interior design"
              loading="lazy"
            />
            <div className="about__img-accent" />
          </div>
          <div className="about__img-float">
            <img
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=85"
              alt="Striking modern architecture facade"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about__text">
          <span className="about__tag anim-up">Who We Are</span>
          <h2 className="about__heading anim-up anim-d1">
            Architecture That <span className="about__heading-accent">Speaks</span>
          </h2>
          <p className="about__desc anim-up anim-d2">
            At <strong>Lucentt Architects</strong>, we believe that great architecture
            doesn't just shelter — it <em>inspires</em>. Based in Tadpatri, Andhra Pradesh,
            our studio combines regional sensibility with global design thinking,
            creating spaces that reflect both heritage and ambition.
          </p>
          <p className="about__desc anim-up anim-d3">
            From private residences to commercial landmarks, every project begins
            with a conversation and ends with a space that exceeds expectations.
          </p>

          <div className="about__highlights anim-up anim-d4">
            {[
              'Sustainable Design',
              'Vastu Integration',
              'End-to-End Delivery',
              'Award-Worthy Quality',
            ].map(item => (
              <div key={item} className="about__hl">
                <span className="about__hl-bar" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
