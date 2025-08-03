import React, { useState } from 'react';
import '../css/Home.css';

function Home() {
  const products = [
    { id: 1, name: 'T-shirt', image: 'https://via.placeholder.com/150', price: 15 },
    { id: 2, name: 'Jeans', image: 'https://via.placeholder.com/150', price: 40 },
    { id: 3, name: 'Sneakers', image: 'https://via.placeholder.com/150', price: 60 },
  ];

  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = () => {
    if (isLoggedIn) {
      setCartCount(cartCount + 1);
    } else {
      alert('Please login or signup to add items to your cart.');
    }
  };

  // Mock login/logout toggle
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setCartCount(0); // optional: clear cart on logout
  };

  return (
    <div className="home-container">
      {/* Header with login toggle and cart */}
      <header className="home-header">
        <button className="login-toggle-btn" onClick={toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login / Signup'}
        </button>

        <div className="cart-container">
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </div>
      </header>

      {/* Product list */}
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={addToCart}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
