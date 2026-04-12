export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__bg" />
      <div className="loader__glow loader__glow--1" />
      <div className="loader__glow loader__glow--2" />
      <div className="loader__corner loader__corner--tl" />
      <div className="loader__corner loader__corner--tr" />
      <div className="loader__corner loader__corner--bl" />
      <div className="loader__corner loader__corner--br" />
      <div className="loader__content">
        <div className="loader__diamond">◇</div>
        <div className="loader__text">
          <span className="loader__name">LUCENTT</span>
          <span className="loader__tagline">ARCHITECTS</span>
        </div>
        <div className="loader__bar">
          <div className="loader__bar-fill" />
        </div>
      </div>
    </div>
  )
}
