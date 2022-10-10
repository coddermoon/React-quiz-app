import React from 'react';
import './Cart.css'

const Cart = ({topic}) => {
    const {logo,name,total}= topic
    return (
        <div className='cart'>
           <div className="img-container">
           <img src={logo} alt="" />
           </div>
           <div className="cart-info">
            <h2>Topic :{name}</h2>
            <h4>Total Quiz : {total}</h4>
            <button className='startBtn'>Start Now</button>
           </div>
        </div>
    );
};

export default Cart;