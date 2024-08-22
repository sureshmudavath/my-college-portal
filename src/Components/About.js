import React from "react";
import AboutImage from "../Assets/about-college.jpeg";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-section-image-container">
        <img src={AboutImage} alt="About College" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">A Tradition of Excellence</h1>
        <p className="primary-text">
          ABC College has been nurturing minds and fostering success for over 50 years. Our mission is to provide quality education and create leaders of tomorrow.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">Watch Video</button>
        </div>
      </div>
    </div>
  );
};

export default About;
