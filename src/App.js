import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;