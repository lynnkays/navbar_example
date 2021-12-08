import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../utilities/helpers";
import "../css/MobileNav.css";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
   <button className="hamburger" onClick={handleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </button>
    <div className="menu-wrapper">
     <div className={`menu ${openNav ? " show-menu" : ""}`}>
        <a href="#close" onClick={handleMenu} className="close">&#10006;</a>
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
      </div>
      </>

  );
};

export default MobileNav;
