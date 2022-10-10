import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home";

import NotFound from "../../components/NotFound/NotFound";
import Quizes from "../../components/Quizes/Quizes";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Home/>
            },{
                path:'/blog',
                element:<Blog/>
            },{
                path:'/statics',
                element: <h2>this is chirt pages</h2>
            }
            ,{
                path:'/quiz/:id',
                loader:async({params})=>{
                    
                    return await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                
                element: <Quizes/>
            },
            {
                path:'*',
                element:<NotFound/>
            },
        ]
    },
    
   
    
])
