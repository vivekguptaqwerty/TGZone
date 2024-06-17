import React, {  useEffect, useRef } from "react";
import pdf from "./pdf/Vivek Resume.pdf";
import Typed from "typed.js";
import hero from "./data/hero.json";
import './App.css'; // Ensure this imports the CSS styles

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is Vivek Gupta",
        "I'm a Software Developer",
        "And Web Designer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="main_section" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>
        <a
          href={pdf}
          download="resume.pdf"
          className="btn btn-outline-warning btn-lg my-3"
        >
          Download Resume
        </a>
      </div>
      <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
        <div className="img">
          <img
            src={`/assets/${hero.imgSrc}`}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};


export default Home;
