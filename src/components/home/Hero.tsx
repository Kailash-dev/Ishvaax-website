import data from "../../data/home.json";
import "./Hero.scss";

const Hero = () => {
  const { hero } = data;

  return (
    <section className="hero hero--full">
      <div className="hero__container">
        <div className="hero__grid">

          {/* LEFT: Content */}
          <div className="hero__content">
            <h1>
              {hero.title.replace(hero.highlight, "")}
              <span>{hero.highlight}</span>
            </h1>

            <p>{hero.description}</p>

            <div className="hero__actions">
              <button className="primary-btn">{hero.primaryCta}</button>
              <button className="secondary-btn">{hero.secondaryCta}</button>
            </div>
          </div>

          {/* RIGHT: Placeholder */}
          <div className="hero__visual">
            <div className="hero__image-placeholder">
              {/* Client image will go here */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
