import React from "react";
import project from "./data/project.json";
import './App.css'; // Ensure this imports the CSS styles

const Projects = () => {
  return (
    <>
      <div className="container projects my-5" id="projects">
        <h1>PROJECTS</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 my-5">
          {project.slice(0, 2).map((data) => ( // Displaying only the first two projects
            <div
              className="col mb-4"
              key={data.key}
            >
              <div
                className="card bg-dark text-light text-center project-section"
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="Project Thumbnail"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a
                    href={data.demo}
                    className="btn btn-primary mx-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={data.source}
                    className="btn btn-warning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
