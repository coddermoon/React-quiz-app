import React from 'react';
import Options from '../Options/Options';
import './Quiz.css'
const Quiz = ({questionArr}) => {
    const {question,options}=questionArr
    console.log(options)
    return (
        <div className='quiz'>
            <div className="quiz-cart">
            <div dangerouslySetInnerHTML={{__html: question}}></div>
                
           {/* <h3>Question :{question}</h3> */}
           <div className="options">
{
    options.map(option=><Options
    option={option}
    />)
}
           </div>
            </div>
        </div>
    );
};

export default Quiz;