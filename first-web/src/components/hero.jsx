import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <div className="hero-badge-img"></div>
        <span>Trusted by 10k+ people</span>
      </div>

      <div className="hero-title">
        <h1>
          Turning imagination into <br />
          <span>digital</span> impact.
        </h1>
      </div>

      <p className="hero-desc">
        Creating meaningful connections and turning big ideas <br />
        into interactive digital experiences.
      </p>

      <div className="hero-image"></div>

      <p className="hero-trust">Trusted by Leading Companies</p>

      <div className="partner">
        <div className="coinbase"></div>
        <div className="google"></div>
        <div className="rakuten"></div>
        <div className="ms"></div>
        <div className="airbnb"></div>
        <div className="zoom"></div>
      </div>
    </section>
  );
}
