// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/router';

function App() {
  const [token, setToken] = useState('');

  return (
    <Router>
      <AppRouter token={token} setToken={setToken} />
    </Router>
  );
}

export default App;
