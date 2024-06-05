import React from 'react'
import { Link } from 'react-router-dom';
import "./hero.css"

function Hero() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='hero-btn'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>Elroy Foundation School</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.</p>
                <div className=''>
                    <Link to="/admissions" className='hero-link' >
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>OUR COURSES</button>
                    </Link> 
                    <Link to="/contact" className='hero-link'>
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>CONTACT US</button>
                    </Link>
                </div>
            </div>
        </header>
     </div>
  )
}

export default Hero