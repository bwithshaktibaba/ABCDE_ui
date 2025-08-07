import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setToken, setUsername }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Test credentials for demo purposes
  const TEST_CREDENTIALS = {
    email: 'test@example.com',
    password: 'password123',
    username: 'TestUser'
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email === TEST_CREDENTIALS.email && password === TEST_CREDENTIALS.password) {
      setToken('demo-token-' + Date.now());
      setUsername(TEST_CREDENTIALS.username);
      // Redirect to home page after successful login
      navigate('/');
    } else {
      setError('Invalid credentials. Use test@example.com / password123');
    }
  };

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Login
        </button>
        <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          <p><strong>Test Credentials:</strong></p>
          <p>Email: test@example.com</p>
          <p>Password: password123</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
