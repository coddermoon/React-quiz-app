import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Options from '../Options/Options';
import './Quiz.css'
const Quiz = ({questionArr}) => {
    const {question,options,correctAnswer}=questionArr
  
    const handleClick=(option)=>{
      if (correctAnswer===option) {
        alert('corrtct answer')
      }else{
        alert('wrong answer')
      }
    }

    // show ansert button handle

    const showBtnHandle = (ans)=>{
        console.log(ans)
        // alert(`correct answer is  :`,ans)

    }
    
    
    return (
        <div className='quiz'>
            
            <div className="quiz-cart">
            <button onClick={()=>showBtnHandle(correctAnswer)} className='eyeIcon'>
            <FontAwesomeIcon icon={faEye}/>
            </button>
            <div dangerouslySetInnerHTML={{__html: question}}></div>
                
           {/* <h3>Question :{question}</h3> */}
           <div className="options">
{
    options.map(option=><Options
    option={option}
    key={option}
     handleClick={handleClick}

    />)
}
           </div>
            </div>
        </div>
    );
};

export default Quiz;