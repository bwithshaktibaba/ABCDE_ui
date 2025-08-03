import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/login';
import Items from './pages/items';

function App() {
  const [token, setToken] = useState('');

  const handleLogout = () => {
    setToken('');
  };

  return (
    <Router>
      <div className="app-container">
        <Header token={token} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/items" element={<Items token={token} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;