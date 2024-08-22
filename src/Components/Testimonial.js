import React from "react";
import ProfilePic from "../Assets/student-image.jpeg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonials">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonials</p>
        <h1 className="primary-heading">What Our Students Say</h1>
        <p className="primary-text">
          Hear from our students and alumni about their experiences at ABC College.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="Student" />
        <p>
          "ABC College has provided me with the knowledge and skills I need to succeed in my career. The faculty and resources are top-notch!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
