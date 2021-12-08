import React, { useState, useEffect, useCallback } from "react";
import { debounce } from "../utilities/helpers";
import "../css/Navbar.css";
import MobileNav from "./MobileNav";
import Logo from "../logo.png";

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
    <div className="topnav" style={{ top: show ? "0" : "-1000px" }}>
      <img src={Logo}></img>
      <MobileNav />
    </div>
  );
};

export default Navbar;
