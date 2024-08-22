import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // Assuming this is where your styles are

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch students
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/students/');
        setStudents(response.data); // Assuming the response contains an array of students
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    // Call the function to fetch students
    fetchStudents();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Students Page</h1>
      {students.length > 0 ? (
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Enrollment Date</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.enrollment_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}

export default Students;
