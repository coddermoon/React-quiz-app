import React from 'react';
import Swal from 'sweetalert2';
import './Blog.css'

const Blog = () => {
    const questionAns = [
        {
        id:1,
        ques:'How React Works',
        ans:'lorem'
    },
        {
        id:1,
        ques:'How React Works',
        ans:'lorem'
    },
        {
        id:8,
        ques:'How React Works',
        ans:'lorem'
    },

]

const handleQuestion=({ques,ans})=>{
    Swal.fire({
        title: `Question:${ques}`,
        text: `ans ${ans}`,
        
      })
}
    return (
        <div className='blog'>
           <div className="blog-title">
           <h2>WellCome To My Blog page</h2>
            <h4>React Common Question And Answer:</h4>
           </div>
           <div className="btn-group">
            {
                questionAns.map(qus=> <div
                key={qus.id} className=''>
                    <button onClick={()=>handleQuestion(qus)} className='startBtn'>{qus.ques}</button>
                </div>)
            }
           </div>
        </div>
    );
};

export default Blog;