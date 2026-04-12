export default function HeroSlideshow({ slides, current }) {
  return (
    <div className="hero__slides">
      {slides.map((slide, i) => (
        <div key={i} className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}>
          <img src={slide.image} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="hero__gradient" />
    </div>
  )
}
