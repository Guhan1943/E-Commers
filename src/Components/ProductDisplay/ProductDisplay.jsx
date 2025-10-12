import React from 'react'
import './ProductDisplay.css'
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';

export const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='product_display'>
            <div className="product_diplay-left">
                <div className="product_display-image-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product_display-image">
                    <img className='product_display-image-main' src={product.image} alt="" />
                </div>
            </div>
            <div className="product_display-right">
                <h1>{product.name}</h1>
                <div className="product_display-right_star">
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_icon} alt='' />
                    <img src={star_dull_icon} alt='' />
                    <p>(122)</p>
                </div>
                <div className="product_display-right-price">
                    <div className="product_display-right-old_price">$ {product.old_price}</div>
                    <div className="product_display-right-new_price">$ {product.new_price}</div>
                </div>
                <div className="product_display-right-discription">
                    A lightweight , usually knitted , pullover shirt , close-fitting and with a round neckline and short  sleeves , worn as an undershirt or outerwear by garment.
                </div>
                <div className="product_display-right-size">
                    <h1>Select Size</h1>
                    <div className="product_display-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='product_display-right-category'><span>Category :</span>  Women , T-Shirt , Crop Top</p>
                <p className='product_display-right-category'><span>Tags :</span> Modern , Latest</p>


            </div>

        </div>
    )
}
