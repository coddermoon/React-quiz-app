import React from 'react';
import './Hero.css'
import hero from '../../assets/images/hero.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-content">
              <h2 className='title2'>Take A <span className='violet'>Challange</span> </h2>
              <h1 className='title1'>Justify Yourself</h1>
              <p className='hero-p'>Quiz is one of the most essential thing for our dailly Life as a Student,looking for any job you need to represent it so, let's start build as a skillfull personality</p>
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