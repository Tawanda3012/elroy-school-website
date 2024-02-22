import React from "react";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";


function HomePage() {
  return (
    <div>
      <div className="welcome-text">
        <h1>Welcome to Elroy Foundation School</h1>
        <p className="welcome-paragraph">
          We are dedicated to providing a supportive and inclusive learning
          environment for our students. The mission of Elroy Foundation School is
          to empower our children to achieve their greatest potential both as
          students and as members of their communities.
        </p>
        <div className="welcome-icon">
          <div>
           <a href="enroll-link">
           <FaUserGraduate  className="icon" /> 
           </a>
            <p>Enroll</p>
          </div>
          <div>
           <a href="teacher-icon">
           <FaChalkboardTeacher  className="icon" /> 
           </a>
            <p>Teacher</p>
          </div>
          <div>
            <a href="support-icon" >
            <FaHandsHelping  className="icon" /> 
            </a>
            <p>Support</p>
          </div>
          <div>
          <a href="gorow-icon">
          <FaChartLine  className="icon" />
          </a>
            <p>Grow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
