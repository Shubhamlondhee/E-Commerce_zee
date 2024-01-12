import React from 'react'
import './Footer.css'
import footerlogo from '../img/Footerlogo.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


 const Footer = () => {

  return (
      <div className='footer'>
        <div className='footer-logo'>
             <img src={footerlogo} alt='footerlogo'/>
              <p> Gym Shark </p>
        </div>
        <ul className='footer-links'> 
          <li>Company</li>
          <li>Products</li>
          <li> Offices</li>
          <li> About</li>
          <li> Contact</li>   
        </ul>
        <div className='footer-socialmedia'>
        <div className='footer-icons-container'>
            <FaInstagram/>
        </div>
        <div className='footer-icons-container'>
        <FaFacebook />
        </div>
        <div className='footer-icons-container'>
        <FaLinkedin />
        </div>
        </div>

  <div className='footer-copyright'>
           <hr/>
           <p> copyright @ 2024 - All Right Reserved </p>
  </div>
        
             
      </div>
    )
}
 
export default Footer;