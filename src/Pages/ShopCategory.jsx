import React, { use, useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropDown_icon from '../assets/dropdown_icon.png';
import { Items } from '../Components/Items/Items';
export const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shopCatogoty-indexsort">
        <p>
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
          <span>Showing 1 to 12</span> Out of 36 products
       
        </p>
        <div className="shopCategory-sort">
          Sort by <img src = {dropDown_icon} />
        </div>
      </div>
      <div className="shopCategory-product">
        {all_products.map((item , i) =>{
          if(props.category === item.category ){
            return <Items key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Load More
      </div>
    </div>
  )
}
