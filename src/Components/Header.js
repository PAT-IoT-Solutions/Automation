import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "./Logo";
import "./Header.css"; // Import the CSS file for styling

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "smart-products", label: "Products" },
    { id: "smart-gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Logo scrolled={scrolled} />

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
