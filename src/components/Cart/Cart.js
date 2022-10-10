import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ topic }) => {
  const { logo, name, total, id } = topic;
  return (
    <div className="cart">
      <div className="img-container">
        <img src={logo} alt="" />
      </div>
      <div className="cart-info">
        <h2>Topic :{name}</h2>
        <h4>Total Quiz : {total}</h4>

        
          <Link to={`quiz/${id}`}>
          <button className="startBtn">Start Now   </button>

          </Link>
      
      </div>
    </div>
  );
};

export default Cart;
