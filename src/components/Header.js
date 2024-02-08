import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.css';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`site-header ${isOpen ? 'open' : ''}`}>
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
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
          <li><Link to="/instruction" onClick={closeMenu}>INSTRUCTION</Link></li>
          <li><Link to="/resources" onClick={closeMenu}>RESOURCES</Link></li>
          <li><Link to="/NewsEventsPage" onClick={closeMenu}>NewsEventsPage</Link></li>
          <li><Link to="/AdmissionsPage" onClick={closeMenu}>ENROLL</Link></li>
          <li><Link to="/ContactPage" onClick={closeMenu}>CONTACT</Link></li>
        </ul>
      </nav>
      {/* Call to Action buttons */}
      <div className="cta-buttons">
        <button className="donate" onClick={closeMenu}>DONATE</button>
      </div>
    </header>
  );
};

export default Header;
