// components/Header.js
import React from 'react';
import '../css/Header.css';
import { Link, useNavigate } from 'react-router-dom';

function Header({ token, onLogout, cartCount }) {
  const navigate = useNavigate();

  // Handle user logout
  const handleLogoutClick = () => {
    onLogout();       // Clear user token / session in parent
    navigate('/');    // Redirect to home/login page
  };

  // Show cart items alert
  const handleCartClick = () => {
    alert(`You have ${cartCount} item(s) in your cart.`);
  };

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">My App</h1>
        <ul className="nav-links">
          {token ? (
            <>
              <li>
                <Link to="/items">Items</Link>
              </li>
              <li>
                <button onClick={handleCartClick} className="cart-btn">
                  Cart ({cartCount})
                </button>
              </li>
              <li>
                <button onClick={handleLogoutClick} className="logout-btn">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
