import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [loginMethod, setLoginMethod] = useState<'phone' | 'wechat' | null>(null);

  const handleLogin = () => {
    // 这里应该实现实际的登录逻辑
    console.log(`Logging in with ${loginMethod}`);
    onLogin();
  };

  return (
    <div className="fixed inset-0 bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">登录</h2>
        <div className="space-y-4">
          <button
            onClick={() => setLoginMethod('phone')}
            className={`w-full py-3 px-4 border rounded-lg flex items-center justify-center space-x-2 ${
              loginMethod === 'phone' ? 'border-blue-500 text-blue-500' : 'border-gray-300'
            }`}
          >
            <Phone size={20} />
            <span>手机号授权登录</span>
          </button>
          <button
            onClick={() => setLoginMethod('wechat')}
            className={`w-full py-3 px-4 border rounded-lg flex items-center justify-center space-x-2 ${
              loginMethod === 'wechat' ? 'border-blue-500 text-blue-500' : 'border-gray-300'
            }`}
          >
            <MessageCircle size={20} />
            <span>微信一键登录</span>
          </button>
        </div>
        <button
          onClick={handleLogin}
          disabled={!loginMethod}
          className={`w-full mt-6 py-3 rounded-lg text-white ${
            loginMethod ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
          } transition-colors`}
        >
          登录
        </button>
      </div>
    </div>
  );
};

export default Login;