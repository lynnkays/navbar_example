import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../../utilities/helpers";
import "../../static/css/Navigation/Navbar.css";
import Logo from "../../static/img/logo.png";

const MobileNav = () => {
const [openNav, setOpenNav] = useState(false)

  const handleMenu = () => {
     setOpenNav(!openNav)
  }

  return (
    <div className="topnav">
      <div className="logo">
      <img src={Logo} alt="logo" />
      </div>
      <button className="hamburger" onClick={handleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
  <ul className={`mobile-nav ${openNav ? " show-menu" : ""}`}>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  </div>
  );
};

export default MobileNav;
