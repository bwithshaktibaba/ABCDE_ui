// src/routes/router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Items from '../pages/items';

const AppRouter = ({ token, setToken }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />} />
      <Route path="/items" element={<Items token={token} />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRouter;
