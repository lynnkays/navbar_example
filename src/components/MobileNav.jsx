import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../utilities/helpers";
import "../css/MobileNav.css";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
    setAnimateIcon(!animateIcon);
  };

  return (
    <>
      <a className="icon-button" onClick={handleMenu}>
        <div className={`icon ${animateIcon ? " transform" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
      <div className={`menu ${openMenu ? " display" : ""}`}>
        <ul>
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
    </>
  );
};

export default MobileNav;
