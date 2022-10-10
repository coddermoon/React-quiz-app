import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home";

import NotFound from "../../components/NotFound/NotFound";
import Quizes from "../../components/Quizes/Quizes";
import Statics from "../../components/Statics/Statics";

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
                loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statics/>
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
