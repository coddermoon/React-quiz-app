import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Home = () => {
     const loadTopic = useLoaderData().data
     
     
    return (
        <div>
            <h2>this is HomePage</h2>

            {/* carts */}
            <div className='carts'>
                {
                  loadTopic.map(topic=><Cart
                    key={topic.id}
                    topic={topic}
                  />)  
                }
            </div>

        </div>
    );
};

export default Home;