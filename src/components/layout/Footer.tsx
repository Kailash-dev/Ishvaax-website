import "./styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© {new Date().getFullYear()} Ishvax Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
