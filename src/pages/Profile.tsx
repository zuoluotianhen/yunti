import React from 'react';
import { Clipboard, Wrench, Settings, LogOut, ChevronRight } from 'lucide-react';

const Profile = () => {
  // 模拟用户会员状态，实际应用中这应该从后端或状态管理中获取
  const isVip = true; // 设置为 false 可以测试非会员状态

  const menuItems = [
    {
      icon: Clipboard,
      label: '服务订单',
      subItems: ['已下单', '已完成', '全部订单', '分享给朋友'],
    },
    {
      icon: Wrench,
      label: '服务与工具',
      subItems: ['我的客户', '企业合作', '投诉电话', '投诉反馈'],
    },
    {
      icon: Settings,
      label: '设置',
      subItems: ['隐私政策', '服务协议', '使用规则', '经营资质', '服务监督协议'],
    },
    { icon: LogOut, label: '退出登录' },
  ];

  return (
    <div className="p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">我的</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          alt="用户头像"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div className="flex-grow">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">张三</h2>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              isVip ? 'bg-yellow-400 text-yellow-800' : 'bg-gray-300 text-gray-600'
            }`}>
              {isVip ? 'VIP' : '普通用户'}
            </span>
          </div>
          <p className="text-gray-600">客户ID: 10001</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md">
        {menuItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <item.icon className="w-6 h-6 mr-4 text-gray-600" />
                <span>{item.label}</span>
              </div>
              {item.subItems && <ChevronRight className="w-5 h-5 text-gray-400" />}
            </div>
            {item.subItems && (
              <div className="bg-gray-50 px-4 py-2">
                {item.subItems.map((subItem, subIndex) => (
                  <div key={subIndex} className="py-2 pl-10 text-sm text-gray-600">
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;