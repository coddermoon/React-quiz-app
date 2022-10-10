import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Blog from "../../components/Blog/Blog";
import Home from "../../components/Home/Home";

import NotFound from "../../components/NotFound/NotFound";

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
            },
            {
                path:'*',
                element:<NotFound/>
            },
        ]
    },
    
   
    
])
