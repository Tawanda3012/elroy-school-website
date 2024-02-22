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
            <FaUserGraduate  className="icon" /> 
            <p>Enroll</p>
          </div>
          <div>
            <FaChalkboardTeacher  className="icon" /> 
            <p>Teacher</p>
          </div>
          <div>
            <FaHandsHelping  className="icon" /> 
            <p>Support</p>
          </div>
          <div>
            <FaChartLine  className="icon" />
            <p>Grow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
