import React from "react";
import drazeticLogo from "./logo1.jpg";
import "./navbar.scss";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link className="products" to="/Proizvodi">
        Ponuda
      </Link>
      <Link to="/">
        <img src={drazeticLogo} alt="logo"></img>
      </Link>
      <Link className="contact" to="/Kontakt">
        Kontakt
      </Link>
    </div>
  );
};

export default NavBar;
