import React from 'react'
import './Popular.css'
import data_products from '../../assets/data';
import { Items } from '../Items/Items';

export const Popular = () => {
  return (
    <div className='popular-container'>
        <h1>POPULAR IN WOMEM</h1>
        <hr />
        <div className="popular_items">
            {data_products.map((item,i)=>{
                return <Items key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>

    </div>
  )
}
