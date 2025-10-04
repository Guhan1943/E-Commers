import React from 'react';
import './Hero.css';
import hand_icon from '../../assets/hand_icon.png';
import arrow_icon from '../../assets/arrow.png';
import hero_img from '../../assets/hero_image.png';
export const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero_left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero_hand-icon'>
                    <p>NEW</p>
                    <img src={hand_icon} />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero_latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero_right">
    <img src={hero_img} alt="" />
        </div>
    </div>
  )
}
