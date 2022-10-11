import React from 'react';
import Swal from 'sweetalert2';
import './Blog.css'

const Blog = () => {
    const questionAns = [
        {
        id:1,
        ques:'Puropse of react router',
        ans:'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.we can negabate one page to other page as a single page application without reloading'
    },
        {
        id:1,
        ques:'How Context Api Works',
        ans:'The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.We can transfer data without props drilling and make life easyier as a developer using contex Api'
    },
        {
        id:8,
        ques:'Describe about useRef',
        ans:` You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} /> , React will set its .current property to the corresponding DOM node whenever that node changes./n
        
        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.`
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