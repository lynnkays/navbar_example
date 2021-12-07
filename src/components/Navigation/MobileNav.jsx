import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../../utilities/helpers";
import "../../static/css/Navigation/MobileNav.css";
import Logo from "../../static/img/logo.png";
import MenuItems from "./MenuItems";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="test">
    
      <div className="mobile-nav">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <button className="hamburger" onClick={handleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>

      <div>
        <ul className={`menu ${openNav ? " show-menu" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default MobileNav;
