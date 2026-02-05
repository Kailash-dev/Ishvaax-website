import data from "../data/contact.json";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <h1>{data.heading}</h1>
        <p className="contact__description">{data.description}</p>

        <div className="contact__details">
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Address:</strong> {data.address}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
