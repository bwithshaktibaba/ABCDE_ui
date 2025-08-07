// components/Header.js
import React from 'react';
import '../css/Header.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBox, FaShoppingCart, FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';

function Header({ token, onLogout, cartCount = 0 }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <h1 className="logo">
            <Link to="/">
              <img src="public/assets/abcde.png" alt="ABCDE Store" className="logo-image" />
            </Link>
          </h1>

          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                <FaHome className="nav-icon" />
                <span className="nav-text">Home</span>
              </Link>
            </li>

            {token ? (
              <>
                <li>
                  <Link to="/items" className="nav-link">
                    <FaBox className="nav-icon" />
                    <span className="nav-text">Items</span>
                  </Link>
                </li>
                <li>
                  <button onClick={handleCartClick} className="cart-btn">
                    <FaShoppingCart className="nav-icon" />
                    <span className="nav-text">Cart</span>
                    {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                  </button>
                </li>
                <li>
                  <button onClick={handleLogoutClick} className="logout-btn">
                    <FaSignOutAlt className="nav-icon" />
                    <span className="nav-text">Logout</span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="nav-link login-btn">
                    <FaSignInAlt className="nav-icon" />
                    <span className="nav-text">Login</span>
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="nav-link signup-btn">
                    <FaUserPlus className="nav-icon" />
                    <span className="nav-text">Signup</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
