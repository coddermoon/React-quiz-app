import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
// import errorImg from '../../assets/images/notFound.png'
const NotFound = () => {
    return (
        <div className='notFound'>

            <div className='error'>
                <h1 className='err'>404</h1>
                <h2>Opps!Page Not Found</h2>
                <h4 className='msg'>Sorry your Page which you Are looking For doesn't Exist,</h4>
             
              
                <Link className='bth' to='/'>Back To Home</Link>   

            </div>
           
           
            {/* <img src={errorImg} alt="" /> */}
         
        </div>
    );
};

export default NotFound;