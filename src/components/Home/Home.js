import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';

const Home = () => {
     const loadTopic = useLoaderData().data
     
     
    return (
        <div>
           {/* hero section */}

           <div className="heroSection">
            <Hero/>
           </div>

            {/* carts */}
           <div className="topic-info">
           <div className="topic-title">
           <h2>Choose your Favourite Topic</h2>
              <h3 className='color-gray'>Take A tour</h3>
           </div>
           <div className='carts'>
              
              {
                loadTopic.map(topic=><Cart
                  key={topic.id}
                  topic={topic}
                />)  
              }
          </div>
           </div>

        </div>
    );
};

export default Home;