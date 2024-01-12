import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './e-com_pages/shop';
import Product from './e-com_pages/Product';
import {Error} from './e-com_pages/Error';
import  Cart  from './e-com_pages/Cart';
import Loginsignup from './e-com_pages/Loginsignup';
// import Footer from './Footer/Footer';
import Mens from './e-com_pages/Mens';
import Accessories from './e-com_pages/Accessories';
import Women from './e-com_pages/Women';

function App() {
  return (

      <>
       
         <BrowserRouter>
         <Navbar/>
          <Routes>
              <Route path='/' element ={<Shop/>}/>
              <Route path='/mens' element ={<Mens/>}/>
               <Route path='/women' element ={<Women/>}/>
              <Route path='/Accessories' element ={<Accessories />}/>
              <Route path='/product/:id' element ={<Product />} />
              <Route path='/cart' element ={<Cart/>} />
              <Route path='/login' element ={<Loginsignup /> } />
              <Route path='/Error' element ={<Error />} />
              
          </Routes>
          
         </BrowserRouter>

      </>
  );
}

export default App;
