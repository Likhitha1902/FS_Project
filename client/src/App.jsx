import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import GardeningTips from './pages/GardeningTips';
import FAQs from './pages/FAQs';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Shop from './pages/shop';
import Cart from './pages/Cart';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/GardeningTips" element={<GardeningTips />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
