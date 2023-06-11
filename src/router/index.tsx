import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home';
import SignUp from '../pages/register';
import Login from '../pages/login';
import Cart from '../pages/cart';


const App: React.FC = () => {
  return (
    <Router>
       <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route path="" element={<Home />} />
          <Route path="/Register" element={<SignUp/>} />
          <Route path="login"   element={<Login/>}/>
          <Route path="cart" element={<Cart/>}/>
      
      
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


