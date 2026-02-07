import data from "../../data/home.json";
import "./ServicesPreview.scss";

const ServicesPreview = () => {
  const { services } = data;

  return (
    <section className="services">
      <div className="services__container">
        <h2>{services.heading}</h2>

        <div className="services__grid">
          {services.items.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card__icon" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
