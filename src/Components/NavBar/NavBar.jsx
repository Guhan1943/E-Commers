import React, { useState } from 'react'
import './NavBar.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const[menu , setMenu] = useState("shop");
    return (
        <div className='navbar_container'>
            <div className="navbar_logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="navbar_menu">
                <li onClick={()=> setMenu("shop")}> <Link style={{textDecoration: 'none' }} to='/'>Shop</Link>  {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={()=> setMenu("mens")}><Link style={{textDecoration: 'none' }} to='mens'>Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={()=> setMenu("womens")}><Link style={{textDecoration: 'none' }} to='womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={()=> setMenu("kids")}><Link style={{textDecoration: 'none' }} to='kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="navbar_login_cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                
                <div className="navbar_cart-count">0</div>
            </div>
        </div>
    )
}
