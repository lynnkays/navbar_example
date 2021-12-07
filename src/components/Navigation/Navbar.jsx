import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../../utilities/helpers";
import "../../static/css/Navigation/Navbar.css";
import Logo from "../../static/img/logo.png";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [previousScroll, setPreviousScroll] = useState(0);
  const [show, setShow] = useState(true);

  const handleNav = debounce(() => {
    const currentScroll = window.pageYOffset;
    setShow(
      (previousScroll > currentScroll && previousScroll - currentScroll > 70) ||
        currentScroll < 10
    );
    setPreviousScroll(currentScroll);
  }, 40);

  useEffect(() => {
    window.addEventListener("scroll", handleNav);

    return () => window.removeEventListener("scroll", handleNav);
  }, [previousScroll, show, handleNav]);

  return (
    <>
    // <div className="navbar" style={{ top: show ? "0" : "-1000px" }}>
    //   <img src={Logo} alt="Logo"/>
    //   <ul className="navbar-right">
    //   <li><a href="#home">Home</a></li>
    //   <li><a href="#news">News</a></li>
    //   <li><a href="#contact">Contact</a></li>
    //   <li><a href="#about">About</a></li>
    //   </ul>
    // </div>
    // <MobileNav />
    
    </>
  ); 
};

export default Navbar;
