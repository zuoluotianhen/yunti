import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, User, CreditCard, Settings } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/client', icon: Home, label: '首页' },
    { path: '/client/messages', icon: MessageCircle, label: '消息' },
    { path: '/client/membership', icon: CreditCard, label: '会员' },
    { path: '/client/profile', icon: User, label: '我的' },
    { path: '/admin', icon: Settings, label: '管理端' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed bottom-0 left-0 right-0">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.path} className="w-full">
            <Link
              to={item.path}
              className={`flex flex-col items-center py-2 ${
                location.pathname.startsWith(item.path) ? 'text-blue-500' : 'text-gray-600'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;