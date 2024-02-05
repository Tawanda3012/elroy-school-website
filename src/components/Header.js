import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header  className={`site-header ${isOpen ? 'open' : ''}`}>
     
      <div className="hamburger-menu" onClick={handleToggle}>
        {/* Each bar in the hamburger menu */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Navigation menu */}
      <nav className={`navbar ${isOpen ? 'is-active' : ''}`}>
        <ul>
          {/* Navigation links with onClick to close the menu */}
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
          <li><Link to="/instruction" onClick={() => setIsOpen(false)}>INSTRUCTION</Link></li>
          <li><Link to="/resources" onClick={() => setIsOpen(false)}>RESOURCES</Link></li>
          <li><Link to="/NewsEventsPage" onClick={() => setIsOpen(false)}>NewsEventsPage</Link></li>
          <li><Link to="/AdmissionsPage" onClick={() => setIsOpen(false)}>ENROLL</Link></li>
          <li><Link to="/ContactPage" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
        </ul>
      </nav>
      {/* Call to Action buttons */}
      <div className="cta-buttons">
        <button className="donate" onClick={() => setIsOpen(false)}>DONATE</button>
      </div>
    </header>
  );
};

export default Header;
