import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'

const DynamicSlider = () => {
  // Define state variables for images and captions
  const [images, setImages] = useState([]);
  const [captions, setCaptions] = useState([]);

  // Fetch images and captions from the API endpoint when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Update state with the fetched images and captions
        setImages(data.map(item => item.download_url));
        setCaptions(data.map(item => item.author));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchImages();
  }, []);

  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  // Render the slider with the fetched images and captions
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images && images.map((image, index) => (
          <div key={index} className='slider-body' >
            <img src={image} alt={`Slide ${index}`} />
            <div className='slider-caption'>
            <p>{captions[index]}</p>
            <button className='cta-readmore'>Read More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DynamicSlider;
