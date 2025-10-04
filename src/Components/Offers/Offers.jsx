import React from 'react'
import './Offers.css'
import Exclusive_img from '../../assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers_container'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={Exclusive_img} alt="" />
        </div>

    </div>
  )
}
