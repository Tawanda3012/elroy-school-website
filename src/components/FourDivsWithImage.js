import React, { useState } from "react";
import './FourDivsWithImage.css'; // Import CSS file for styling



// Define a functional component called FourDivsWithImage
const FourDivsWithImage = () => {
  // Define a state variable to keep track of the index of the currently hovered image
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Define an array of image objects, each containing the path to the image, default text, and text to display when hovered
  const images = [
    { path: 'image1.jpg', text: 'Text 1', hoveredText: 'Hovered Text 1' },
    { path: 'image2.jpg', text: 'Text 2', hoveredText: 'Hovered Text 2' },
    { path: 'image3.jpg', text: 'Text 3', hoveredText: 'Hovered Text 3' },
    { path: 'image4.jpg', text: 'Text 4', hoveredText: 'Hovered Text 4' }
  ];

  // Define a function to update the hoveredIndex state variable when mouse enters an image
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  // Define a function to reset the hoveredIndex state variable when mouse leaves an image
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Return the JSX to render the images and their text, handling mouse enter and leave events
  return (
    <div className="container">
      {images.map((item, index) => (
        <div
          key={index}
          className="image-container"
          style={{ backgroundImage: `url(${item.path})` }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="text-container">
            <p>{item.text}</p>
            {hoveredIndex === index && <p>{item.hoveredText}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourDivsWithImage;
