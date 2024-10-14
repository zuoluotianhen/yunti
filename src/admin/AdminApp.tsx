import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AdminNavigation from './components/AdminNavigation';
import AdminDashboard from './pages/AdminDashboard';
import UserManagement from './pages/UserManagement';
import OrderManagement from './pages/OrderManagement';
import ServiceManagement from './pages/ServiceManagement';

const AdminApp: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminNavigation />
      <div className="flex-1 overflow-x-hidden overflow-y-auto p-6">
        <Link to="/client" className="mb-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          返回客户端
        </Link>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/services" element={<ServiceManagement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminApp;