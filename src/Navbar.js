import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="nav_bar container" data-aos="fade-down" data-aos-duration="1000">
        <div className="logo nav_links">Portfolio</div>
        <div className={`right d-flex align-items-center ${isOpen ? 'open' : ''}`}>
          <a href="#home" className="nav_links" onClick={closeMenu}>Home</a>
          <a href="#education" className="nav_links" onClick={closeMenu}>Education</a>
          {/* <div className="nav_links">Education</div> */}
          <a href="#skills" className="nav_links" onClick={closeMenu}>Skills</a>
          <a href="#projects" className="nav_links" onClick={closeMenu}>Projects</a>
          <a href="#contact" className="nav_links" onClick={closeMenu}>Contact</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
