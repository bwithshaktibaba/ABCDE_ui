import React, { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';

function Items({ token, addToCart }) {
  const [items] = useState([
    { 
      id: 1, 
      name: 'Laptop', 
      price: 999.99, 
      description: 'High-performance laptop with 16GB RAM and 512GB SSD',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      category: 'Electronics'
    },
    { 
      id: 2, 
      name: 'Smartphone', 
      price: 699.99, 
      description: 'Latest smartphone model with 5G support and 128GB storage',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop',
      category: 'Electronics'
    },
    { 
      id: 3, 
      name: 'Headphones', 
      price: 199.99, 
      description: 'Premium noise-cancelling wireless headphones with 30hr battery',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop',
      category: 'Audio'
    },
    { 
      id: 4, 
      name: 'Tablet', 
      price: 449.99, 
      description: '10-inch tablet with stylus support and 256GB storage',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3f6d1a6?w=300&h=200&fit=crop',
      category: 'Electronics'
    }
  ]);

  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <div className="items-container">
      <div className="items-header">
        <h1>Available Items</h1>
        <p>Discover our latest collection of premium products</p>
      </div>
      
      <div className="items-grid">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <div className="item-image-container">
              <img src={item.image} alt={item.name} className="item-image" />
              <span className="item-category">{item.category}</span>
            </div>
            
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <p className="item-price">${item.price}</p>
              
              <button 
                className={`add-to-cart-btn ${addedItems[item.id] ? 'added' : ''}`}
                onClick={() => handleAddToCart(item)}
                disabled={addedItems[item.id]}
              >
                {addedItems[item.id] ? (
                  <>
                    <FaCheck className="btn-icon" />
                    Added!
                  </>
                ) : (
                  <>
                    <FaShoppingCart className="btn-icon" />
                    Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
