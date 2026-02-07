
import AboutHeader from "../components/about/AboutHeader";
import data from "../data/about.json";
import "./About.scss";

const About = () => {
  const { whoWeAre, mission, vision, whyChooseUs } = data;

  return (
    <>
      <AboutHeader />

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-section__container">
          <h2>{whoWeAre.title}</h2>
          <p>{whoWeAre.description}</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="about-section alt">
        <div className="about-section__container">
          <h2>{mission.title}</h2>
          <p>{mission.description}</p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="about-section">
        <div className="about-section__container">
          <h2>{vision.title}</h2>
          <p>{vision.description}</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-section alt">
        <div className="about-section__container">
          <h2>{whyChooseUs.title}</h2>

          <div className="about-features">
            {whyChooseUs.features.map((feature, index) => (
              <div className="about-feature" key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
