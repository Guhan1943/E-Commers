import React from 'react'
import './NewCollections.css'
import new_collections from '../../assets/new_collections';
import { Items } from '../Items/Items';


export const NewCollections = () => {
    return (
        <div className='new-collections-container'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="new-collections-items">
                {new_collections.map((item , i) =>{
                    return <Items key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}
