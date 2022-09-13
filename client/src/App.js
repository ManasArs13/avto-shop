import './bootstrap.css';
import './App.css';

import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Wishlist from './pages/Wishlist';
import Basket from './pages/Basket';
import Register from './pages/Register';
import Login from './pages/Login';
//import Categories from './pages/Home';


function App() {
  return (
    <BrowserRouter>       
        <Header />      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:id" element={<Category />}/>
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/wishlist" element={<Wishlist/>} />
          <Route exact path="/basket" element={<Basket/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />

      </BrowserRouter>
  );
}

export default App;
