import React from 'react';
import './Quizes.css'
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData().data
    const {name,total,questions}=quizes
    
    return (
        <div className='quizes'>

            <div className='quizes-header'>
            <h2>{name} quiz part</h2>
            <h3>total quiz :{total}</h3>
            </div>
           <div className="quizes">
            {
                questions.map(questionArr=><Quiz
                questionArr={questionArr}
                key={questionArr.id}
                />)
            }



           </div>
            
        </div>
    );
};

export default Quizes;