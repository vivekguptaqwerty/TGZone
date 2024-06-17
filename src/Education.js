import React from "react";
import experience from "./data/experience.json";
import './App.css'; // Ensure this imports the CSS styles

const About = () => {
  return (
    <>
      <div className="container ex my-3" id="experience">
        <h1>EDUCATION</h1>
        {experience.map((data) => (
          <div
            className="experience my-5 d-flex justify-content-center align-items-center"
            key={data.id}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="right text-center">
              <h2>{data.role}</h2>
              <h3 style={{ color: "yellowgreen", marginBottom: "0.5rem" }}>
                {data.startDate}
              </h3>
              <h3 style={{ color: "yellow", marginTop: "0" }}>
                {data.location}
              </h3>
              <div style={{ color: "yellow" }}>
                {data.experiences.map((exp, index) => (
                  <h6 key={index}>{exp}</h6>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
