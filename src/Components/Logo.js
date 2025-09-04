import React from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

const Logo = ({ scrolled }) => {
  return (
    <Link
      to="home"
      smooth={true}
      className={`logo-link ${scrolled ? "scrolled" : ""}`}
    >
      <img
        src={logo}
        alt="PAT IoT Solutions"
        width={220}
        height={90}
        className="logo"
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
