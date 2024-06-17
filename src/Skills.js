import React from "react";
import skills from "./data/skills.json";
import './App.css'; // Ensure this imports the CSS styles

const Skills = () => {
  return (
    <>
      <div className="container skills my-3" id="skills">
        <h1>SKILLS</h1>
        <div className="items p-3">
          {skills.map((data) => (
            <div
              key={data.title} // Added key prop to each mapped element
              className="text-center item"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <img
                src={`/assets/${data.imageSrc}`}
                alt={data.title} // Improved accessibility with alt text
                style={{ width: "70px", height: "70px" }}
              />
              <h4>{data.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
