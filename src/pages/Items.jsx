import React, { useEffect, useState } from 'react';
import { getItems, addToCart, checkout, getCart, getOrders } from '../api/api';
import '../css/Items.css';

export default function Items({ token }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(res => setItems(res.data)).catch(console.error);
  }, []);

  const handleAddToCart = async (itemId) => {
    try {
      await addToCart(token, itemId);
      alert('Item added to cart');
    } catch {
      alert('Failed to add item');
    }
  };

  const handleCheckout = async () => {
    try {
      await checkout(token);
      alert('Order successful');
    } catch {
      alert('Checkout failed');
    }
  };

  const handleShowCart = async () => {
    const res = await getCart(token);
    const msg = res.data.map(item => `Cart ID: ${item.cart_id}, Item ID: ${item.item_id}`).join('\n');
    alert(msg || 'Cart is empty');
  };

  const handleShowOrders = async () => {
    const res = await getOrders(token);
    const msg = res.data.map(order => `Order ID: ${order.id}`).join('\n');
    alert(msg || 'No orders found');
  };

  return (
    <div className="items-container">
      <div className="items-header">
        <h2 className="items-title">Items</h2>
        <div className="items-actions">
          <button className="action-btn checkout-btn" onClick={handleCheckout}>Checkout</button>
          <button className="action-btn cart-btn" onClick={handleShowCart}>Cart</button>
          <button className="action-btn orders-btn" onClick={handleShowOrders}>Order History</button>
        </div>
      </div>
      <ul className="items-list">
        {items.map(item => (
          <li key={item.id} onClick={() => handleAddToCart(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
