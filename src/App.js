import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Courses from "./Components/Courses";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Students from "./Components/Students";
import Navbar from "./Components/Navbar";


function App() {
  return (


    <div className="App">
      {/* <Navbar/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/students" element={<Students />} />

        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
