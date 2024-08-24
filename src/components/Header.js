import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white text-black py-2.5 px-5 flex flex-wrap justify-between items-center border-b border-gray-200 sticky top-0 transition-all duration-300">
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo can be added here */}
        <div className="logo">
          <Link to="/">
            <img src="/path-to-your-logo.png" alt="Logo" className="h-10" />
          </Link>
        </div>
        
        {/* Hamburger menu - only visible on mobile */}
        <div className="hamburger-menu cursor-pointer md:hidden z-[1000]" onClick={handleToggle}>
          <div className={`bar w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`bar w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`bar w-6 h-0.5 bg-black my-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>

      {/* Navigation - full width on mobile when open, normal on desktop */}
      <nav className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}>
        <ul className="flex flex-col p-0 m-0 list-none md:flex-row">
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-green-500">Home</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/about" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-green-500">ABOUT</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/instruction" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-green-500">INSTRUCTION</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/resources" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-green-500">RESOURCES</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/news" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-green-500">NewsEventsPage</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/admissions" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-green-500">ENROLL</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-5">
            <Link to="/contact" onClick={closeMenu} className="block px-4 py-2 text-black no-underline transition-colors duration-300 hover:text-green-500">CONTACT</Link>
          </li>
        </ul>
      </nav>

      {/* CTA Button */}
      <div className="mt-4 cta-buttons md:mt-0">
        <button className="donate border-none bg-[#C73938] text-white text-decoration-none py-2 px-4 font-bold tracking-wider uppercase cursor-pointer hover:bg-green-500 transition-colors duration-300" onClick={closeMenu}>DONATE</button>
      </div>
    </header>
  );
};

export default Header;