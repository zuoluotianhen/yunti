import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, ClipboardList, Wrench } from 'lucide-react';

const AdminNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin', icon: Home, label: '仪表盘' },
    { path: '/admin/users', icon: Users, label: '用户管理' },
    { path: '/admin/orders', icon: ClipboardList, label: '订单管理' },
    { path: '/admin/services', icon: Wrench, label: '服务管理' },
  ];

  return (
    <nav className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h2 className="text-2xl font-semibold text-center mb-6">管理后台</h2>
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                location.pathname === item.path ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AdminNavigation;