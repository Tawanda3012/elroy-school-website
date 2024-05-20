/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./FourDivsWithImage.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const FourDivsWithImage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [
    { text: "Instructions", hoveredText: "We believe that a rigorous academic program combined with a supportive social-emotional curriculum leads to scholar success. BCSC's academic program reflects the practices that are associated with high-performing urban schools." },
    { text: "Resource", hoveredText: "At the BCSC we are committed to supporting our families. Our Family Liaison, Ms. Miranda, is here to offer to parents and caregivers in need of support due to family stressors, such as children's mental health issues, parenting difficulties, financial struggles, or chemical usage." },
    { text: "Leadership", hoveredText: "Get to know the incredible people that make up our team here at BCSC! Our team is composed of a number of passionate individuals who are dedicated to their work and helping children's growth. Find out more!" },
    // { text: "Text 4", hoveredText: "Hovered Text 4" }
  ];

  const handleMouseEnter = (index) => {
    if (index !== null && index !== undefined)
      setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container ">
      <div className="r">
        {images.map((item, index) => {
          if (item) {
            return (
              <div
                key={index}
                className="col-md-4 image-container" 
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="text-container">
                  <p>{item.text}</p>
                  {hoveredIndex === index && <p>{item.hoveredText}</p>}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default FourDivsWithImage;
