import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../../utilities/helpers";
import "../../static/css/Navigation/Navbar.css";

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
    <div className="topnav" style={{ top: show ? "0" : "-60px" }}>
      <img src={Butterfly} alt="Butterfly" />
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
};

export default Navbar;
