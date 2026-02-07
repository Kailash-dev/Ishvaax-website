import data from "../../data/aboutHeader.json";
import "./AboutHeader.scss";

const AboutHeader = () => {
  const { breadcrumb, title, subtitle } = data;

  return (
    <section className="about-header">
      <div className="about-header__container">
        <span className="about-header__breadcrumb">{breadcrumb}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default AboutHeader;
