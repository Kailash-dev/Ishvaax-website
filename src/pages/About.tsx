import data from "../data/about.json";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h1>{data.heading}</h1>
        <p className="about__description">{data.description}</p>

        <ul className="about__highlights">
          {data.highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
