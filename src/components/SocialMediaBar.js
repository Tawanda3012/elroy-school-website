import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaBar = () => {
  const socialMediaLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com' },
    { icon: <FaTwitter />, url: 'https://www.twitter.com' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com' },
  ];

  return (
    <div className="bg-[#2A5276] py-4 flex justify-center items-center space-x-4">
      <span className="text-sm text-white">Follow us on Social Media</span>
      {socialMediaLinks.map((link, index) => (
        <a href={link.url} key={index} className="text-white hover:opacity-70">
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaBar;