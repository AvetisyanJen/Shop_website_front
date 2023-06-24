import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import Footer from '../components/footer/footer';
import Home from '../pages/mainPage/Home';
import Login from '../pages/user/login';
import Product from '../pages/products/filterProducts';
import CartPage from '../pages/cart/cartPage';
import Order from '../pages/order/order';
import ProtectedRoute from './privatRouter';
import Found from '../pages/found';
import SingleProduct from '../pages/singleProduct.tsx/oneProduct';

// import ProtectedRoute from './privatRouter';
// import AdminPage from '../pages/AdminPanel/AdminPage';
// import Categories from '../pages/AdminPanel/Categories';



const App: React.FC = () => {

  return (
    <Router>
       <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
           <Route path="" element={<Home/>} />
           <Route path="/login"   element={<Login/>}/>
           <Route path="products" element={<Product/>}/>
          <Route path="order" element={<ProtectedRoute><Order/></ProtectedRoute>}/>  
          <Route path="*" element={<Found/>} />
          <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>}/>
          <Route path="productPage/:id" element={<SingleProduct />}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;


