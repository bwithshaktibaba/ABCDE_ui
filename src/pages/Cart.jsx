import React from 'react';
import { FaShoppingCart, FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';

function Cart({ cartItems, setCartItems }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    ).filter(item => item.quantity > 0));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <FaShoppingCart size={48} style={{ marginBottom: '1rem' }} />
          <p>Your cart is empty. Add some items!</p>
        </div>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #eee' }}>
              <div>
                <h4>{item.name}</h4>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
              <div>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '0.25rem 0.5rem' }}>
                    <FaPlus />
                  </button>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '0.25rem 0.5rem' }}>
                    <FaMinus />
                  </button>
                  <button onClick={() => removeFromCart(item.id)} style={{ padding: '0.25rem 0.5rem' }}>
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: '2rem', textAlign: 'right' }}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button style={{ padding: '0.75rem 2rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;