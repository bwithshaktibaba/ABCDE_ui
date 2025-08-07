import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Login from './pages/Login';
import Signup from '../pages/Signup';
import Cart from './pages/Cart';
import Items from '../pages/Items';

function AppRouter() {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#f8f9fa', marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>Home</Link>
        <Link to="/signup" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>Signup</Link>
        <Link to="/login" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>Login</Link>
        <Link to="/cart" style={{ marginRight: '1rem', textDecoration: 'none', color: '#007bff' }}>Cart</Link>
        <Link to="/items" style={{ textDecoration: 'none', color: '#007bff' }}>Items</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
