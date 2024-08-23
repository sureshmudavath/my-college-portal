import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/courses');
        setCourses(response.data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCourses();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const filteredCourses = courses.filter(course => course.title !== 'Unknown');

  return (
    <div>
      <h1>Courses</h1>
      {filteredCourses.length > 0 ? (
        <table className="courses-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Professor</th>
              <th>Price</th>
              <th>Location</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.professor_name}</td>
                <td>${course.price}</td>
                <td>{course.location}</td>
                <td>{new Date(course.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
}

export default Courses;
