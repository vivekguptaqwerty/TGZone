import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import './App.css'; // Ensure this imports the CSS styles

const Contact = () => {
  return (
    <>
      <h1 className="text-center my-4">CONTACT ME</h1>
      <div
        className="container social-con"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        id="contact"
      >
        <div className="social">
          <a
            href="https://www.instagram.com/vivekgupta__03?igsh=aThqNnh2d3pzOXlw"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-gupta-4607bb25a/"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/vivekguptaqwerty"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <FaGithub className="icons" />
          </a>
          <a
            href="mailto:Vivekg3216@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="items"
          >
            <CgMail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
