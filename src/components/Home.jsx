import React from 'react';
import '../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { FaTshirt, FaShoppingBag, FaPlus } from 'react-icons/fa';

function Home({ isLoggedIn, addToCart }) {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'T-shirt', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', price: 15, icon: <FaTshirt /> },
    { id: 2, name: 'Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop', price: 40, icon: <FaShoppingBag /> },
    { id: 3, name: 'Sneakers', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop', price: 60, icon: <FaShoppingBag /> },
  ];

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      addToCart(product);
    } else {
      alert('Please login to add items to your cart.');
      navigate('/login');
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="welcome-section">
          <h1>
            <span className="welcome-icon">🛍️</span>
            Welcome to ABCDE Store
          </h1>
        </div>
      </header>

      {/* Product list */}
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-icon-container">
              {product.icon}
            </div>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
              <FaPlus className="btn-icon" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
