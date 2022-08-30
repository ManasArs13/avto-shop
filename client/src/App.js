import './bootstrap.css';
import './App.css';

import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './layouts/Header';

import Home from './pages/Home';
import Product from './pages/Product';
import Footer from './layouts/Footer';


function App() {
  return (
    <BrowserRouter>
        <Header />
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
