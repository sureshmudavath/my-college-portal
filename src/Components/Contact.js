import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">Get in Touch with Us</h1>
      <p className="primary-text">
        We are here to assist you. Reach out to us for any inquiries or support.
      </p>
      <div className="contact-form-container">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button className="primary-button">Submit</button>
      </div>
      <div className="contact-info">
        <p>Email: info@abccollege.edu</p>
        <p>Phone: +1 (800) 123-4567</p>
        <p>Address: 123 College Ave, City, State, ZIP</p>
      </div>
    </div>
  );
};

export default Contact;
