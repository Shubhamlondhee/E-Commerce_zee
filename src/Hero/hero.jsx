import React from 'react'
import './Hero.css';
import { FaLongArrowAltRight } from "react-icons/fa";

 const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className='hero-left'>
              <h2> NEW RELEASES</h2>

              <div className='hand-hand-icon'>
                   <p> NEW </p>
              </div>
                <p> Collections </p>
                <p> For Athelete </p>
           
            <div className='hero-latest-btn'>
                  <div> Latest collection </div>
                  <FaLongArrowAltRight />
            </div>
            </div>
          
        </div>
    </>
  );
}

export default Hero;