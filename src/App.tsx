import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ClientApp from './client/ClientApp';
import AdminApp from './admin/AdminApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/*" element={<ClientApp />} />
        <Route path="/" element={<Navigate to="/client" replace />} />
      </Routes>
    </Router>
  );
}

export default App;