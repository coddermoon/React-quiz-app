import React from 'react';
import './Options.css'

const Options = ({option,handleClick}) => {
    return (
        <div onClick={()=>handleClick(option)} className='element'>
          
            {option}
        </div>
    );
};

export default Options;