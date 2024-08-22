//import React from "react";
//import CollegeImage from "../Assets/college-image.jpeg";

/*const Home = () => {
  return (
    <div className="home-banner-container">
      <div className="home-text-section">
        <h1 className="primary-heading">Welcome to UTA College Portal</h1>
        <p className="primary-text">
          Discover our programs, campus life, and community.
        </p>
        <button className="secondary-button">Explore Now</button>
      </div>
      <div className="home-image-section">
        <img src={CollegeImage} alt="College" />
      </div>
    </div>
  );
};

export default Home;*/

import React, { useEffect, useState } from "react";
import CollegeImage from "../Assets/college-image.jpeg";
import { Link } from 'react-router-dom';


const Home = () => {
  // State variables to hold fetched data
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  // Fetch data from the Django API when the component mounts
  useEffect(() => {
    // Fetch students from the API
    fetch("http://127.0.0.1:8000/api/students/")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));

    // Fetch courses from the API
    fetch("http://127.0.0.1:8000/posts/api/posts/")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div className="home-banner-container">
      <div className="home-text-section">
        <h1 className="primary-heading">Welcome to UTA College Portal</h1>
        <p className="primary-text">
          Discover our programs, campus life, and community.
        </p>
        <button className="secondary-button">Explore Now</button>
      </div>
      <div className="home-image-section">
        <img src={CollegeImage} alt="College" />
      </div>

      {/* Add sections for displaying dynamic data */}
      <div className="home-student-section">
        <h2><Link to="/students">Our Students</Link></h2>

        <ul>
          {students.map((student) => (
            <li key={student.id}>{student.first_name} {student.last_name}</li>
          ))}
        </ul>
      </div>

      <div className="home-course-section">
        <h2><Link to="/courses">Available Courses</Link></h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

