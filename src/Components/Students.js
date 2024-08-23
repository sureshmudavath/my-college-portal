import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; 

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/students/');
        setStudents(response.data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const hiddenNames = [
    'John Doe',
    'Alice Williams',
    'Bob Brown',
    'Charlie Johnson',
    'Diana White',
    'Ethan Harris'
  ];

  const filteredStudents = students.filter(student => 
    !hiddenNames.includes(`${student.first_name} ${student.last_name}`)
  );
  
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
