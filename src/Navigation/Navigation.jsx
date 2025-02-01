import React from 'react';
import {FiHeart} from "react-icons/fi";
import { AiOutlineUserAdd, AiOutlineShoppingCart} from "react-icons/ai";

import './Navigation.css'
const Navigation = ({handleInputChange, query}) => {
  return (
    <nav>
        <div className="NavContainer">
                <input className="search-input"
                      type="text" 
                      onChange={handleInputChange}
                      value={query}
                      placeholder='Type Your Shoes'  />
            </div>
            <div className='profile-container'>
              <a href="#">
                <FiHeart className='nav-icon'/>
              </a>
              <a href="">
                <AiOutlineShoppingCart className='nav-icon'/>
              </a>
              <a href="">
                <AiOutlineUserAdd className='nav-icon'/>
              </a>
            </div>
    </nav>
  )
}

export default Navigation