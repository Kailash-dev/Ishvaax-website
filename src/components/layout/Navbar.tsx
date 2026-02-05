import { NavLink } from "react-router-dom";
import data from "../../data/navbar.json";
import "./styles/Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">{data.logoText}</div>

        <nav className="navbar__nav">
          {data.menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
