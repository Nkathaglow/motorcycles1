import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const navToggle = () => {
    setActive(!active);
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="nav">
      <a href="#" className="brand">
        motorcycles
      </a>
      <ul className={active ? "nav__menu nav__active" : "nav__menu"}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/About" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/Onsale" className="nav__link">
            Onsale
          </a>
        </li>
        <li className="nav__item">
          <a href="/Cart" className="nav__link">
            Cart
          </a>
        </li>
        <li className="nav__item">
          <a href="/Contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon ? "nav__toggler toggle" : "nav__toggler"}>
        <div className="line1">
          <div className="line2">
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
