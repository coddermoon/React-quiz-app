import React from 'react';
import './Hero.css'
import hero from '../../assets/images/hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content">
              <h2 className='title2'>Take A <span className='violet'>Challange</span> </h2>
              <h1 className='title1'>Justify Yourself</h1>
              <p className='hero-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis laborum nostrum dolorem aut veniam consequatur delectus tempora reprehenderit maxime.</p>
             <div className='btnDiv'>
             <button className='startBtn'>Take A Test</button>
             </div>
            </div>
            <div className="hero-pic">
            <img src={hero} alt="hero pic" />
            </div>
          
          
        </div>
    );
};

export default Hero;