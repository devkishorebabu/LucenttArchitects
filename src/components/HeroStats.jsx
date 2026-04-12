export default function HeroStats({ projects, years, clients, slides, current, onSlideChange }) {
  return (
    <div className="hero__bottom">
      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-num">{projects}+</span>
          <span className="hero__stat-lbl">Projects</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">{years}+</span>
          <span className="hero__stat-lbl">Years</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-num">{clients}%</span>
          <span className="hero__stat-lbl">Satisfaction</span>
        </div>
      </div>
      <div className="hero__indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--on' : ''}`}
            onClick={() => onSlideChange(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
