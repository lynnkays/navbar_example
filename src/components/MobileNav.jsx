import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../utilities/helpers";
import "../css/MobileNav.css";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);
  const [animateHam, setAnimateHam] = useState(false);

  const handleMenu = () => {
    setOpenNav(!openNav);
    setAnimateHam(!animateHam);
  };

  return (
    <>
   <button onClick={handleMenu}>
   <div className={`hamburger ${animateHam ? " open":""}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </button>
     <div className={`menu ${openNav ? " show-menu" : ""}`}>
        <a onClick={handleMenu} className="close">&#10006;</a>
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
