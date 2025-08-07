import React, { useState } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Items from './pages/Items';
import Cart from './pages/Cart';
import Home from './components/Home';

function App() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleLogout = () => {
    setToken('');
    setUsername('');
    setCartItems([]);
  };

  const isLoggedIn = !!token;

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prevItems.filter((i) => i.id !== itemId);
      }
    });
  };

  const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;

  return (
    <Router>
      <div className="app-container">
        <Header token={token} onLogout={handleLogout} cartCount={cartItems.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} addToCart={addToCart} />} />
            <Route path="/login" element={<Login setToken={setToken} setUsername={setUsername} />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/items"
              element={
                isLoggedIn ? <Items token={token} addToCart={addToCart} /> : <Navigate to="/login" replace />
              }
            />
            <Route
              path="/cart"
            element={
                isLoggedIn ? <Cart cartItems={cartItems} setCartItems={setCartItems} /> : <Navigate to="/login" replace />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
