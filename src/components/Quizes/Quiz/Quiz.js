import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';
import Options from '../Options/Options';
import './Quiz.css'
const Quiz = ({questionArr}) => {
    const {question,options,correctAnswer}=questionArr
  
    const handleClick=(option)=>{
      if (correctAnswer===option) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Correct Ans',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        
        Swal.fire({
          icon: 'error',
          title: 'Oops... Your Choose is Incorrect',
          text: `Correct Answer is :${correctAnswer}`,
          
        })
      }
    }

    // show ansert button handle

    const showBtnHandle = (ans)=>{
    
      Swal.fire({
        title: `${ans}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })

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