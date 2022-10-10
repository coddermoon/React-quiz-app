import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className="container">
         <div className="content">
         <div className="logo">
          hi
         </div>
         <div className="links">
             <Link to='/'>Home</Link>
             <Link to='/statics'>Statics</Link>
             <Link to='/blog'>Blog</Link>
            
         </div>
         </div>
         </div> 
     </div>
    );
};

export default Navbar;