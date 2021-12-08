import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../utilities/helpers";
import MobileNav from "./MobileNav";
import Logo from "../logo.png";
import "../css/FullNav.css";

const FullNav = () => {

  return (
      <ul className="navbar-right">
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
  );
};

export default FullNav;