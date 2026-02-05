import data from "../../data/home.json";
import "./Hero.scss";

const Hero = () => {
  const { hero } = data;

  return (
    <section className="hero">
      <div className="hero__container">
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
    </section>
  );
};

export default Hero;
