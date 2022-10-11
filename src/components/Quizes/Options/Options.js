import React from 'react';
import './Options.css'

const Options = ({option,handleClick,question}) => {
    return (
        <div  className='element'>
<input type="radio" id={option} name={question} value={option}/>
  <label htmlFor={option}>{option}</label>

        </div>
    );
};

export default Options;