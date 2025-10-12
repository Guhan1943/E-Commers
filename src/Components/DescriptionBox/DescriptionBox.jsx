import React from 'react'
import './DescriptionBox.css'
export const DescriptionBox = () => {
  return (
    <div className='description_box'>
        <div className="description_box-navigator">
            <div className="description_box-navbox">Description</div>
            <div className="description_box-navbox fade">Reviews (122)</div>
        </div>
        <div className="description_box-description">
            <p>An e-commerce website is an online plateform that facilitates the buying and selling of products or services over the internet. it serves as a virtual marketplace where bussinesses and individuals can showcase their products interact with
                customers and conduct transactions without the need for a physical presence E-commerce website have gained immense popularity due to their convenience and the global reach they offer </p>
                <p>E-commerce website typically display products or services along with detailed descriptions , images , prices and any available variations (eg.sizes,colors) Each product usually has its own dedicated page with relevant information</p>
        </div>
    </div>
  )
}
