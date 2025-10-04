import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter-container'>
        <h1>Get Exclusive offers on your email</h1>
        <p>Subscribe to our news letter and stay update</p>
        <div>
            <input type="email" placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
