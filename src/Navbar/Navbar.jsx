import React from 'react'
import './Navbar.css';
import logo from '../img/logo.jpg';
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// import {Navlink} from 'react-router-dom';

 const Navbar = () => {

    const [menu, setmenu] = useState("shop");


  return (  <>
 <div className='Navbar'> 
      <div className='Nav-logo'>
        <img src={logo} alt="logo" /> 
          <p> GymShark</p> 
      </div>

      <ul className='nav-menu'>
        <li onClick={()=>{setmenu("shop")}}><NavLink to='/' style={{textDecoration:"none"}}>Shop</NavLink>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><NavLink to='/mens' style={{textDecoration:"none"}}>Men</NavLink>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("women")}}><NavLink to='/women' style={{textDecoration:"none"}}>Women</NavLink>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Accessories")}}><NavLink to='/Accessories' style={{textDecoration:"none"}}>Accessories</NavLink>{menu==="Accessories"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
         <NavLink to='/login'> <button >Login</button> </NavLink>  
         <NavLink to='/cart'> <div className='cartstyle'><FaCartArrowDown/></div> </NavLink> 
          <div className='nav-cart-count'>0 </div>
       </div>
 </div>
 </>
    
  );
}
export default Navbar;