import { useState } from 'react';
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import {BrowserRouter , Routes , Route} from 'react-router-dom' ;
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from '../src/assets/banner_mens.png';
import women_banner from '../src/assets/banner_women.png';
import kids_banner from '../src/assets/banner_kids.png';


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/mens' element={<ShopCategory banner={men_banner}category="men" />} />
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
      <Route path="/product/:productId" element={<Product />} />
      
      <Route path='/cart' element = {<Cart/>} />
      <Route path='/login' element = {<LoginSignup/>} />
    </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
