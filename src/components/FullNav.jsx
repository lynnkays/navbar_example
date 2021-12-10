import React from "react";
import "../css/FullNav.css";

const FullNav = () => {
  return (
    <ul className="menu-items">
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
  );
};

export default FullNav;
