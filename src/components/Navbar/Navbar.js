import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className="container">
         <div className="content">
         <div className="logo">
          <img src={logo} alt="logo" />
         </div>
         <div className="links">
             <NavLink  to='/'>Home</NavLink>
             <NavLink to='/statics'>Statics</NavLink>
             <NavLink to='/blog'>Blog</NavLink>
         </div>
         </div>
         </div> 
     </div>
    );
};

export default Navbar;