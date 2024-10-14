import React from 'react';

const Home = () => {
  return (
    <div className="p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">首页</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <img
          src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="电梯维保宣传"
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">电梯维保服务</h2>
        <p className="text-gray-600">我们提供专业的电梯维护和保养服务，确保您的电梯安全可靠。</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="text-lg font-semibold mb-2">最新通知</h3>
        <ul className="space-y-2">
          <li className="text-gray-600">电梯年度检修即将开始，请注意配合</li>
          <li className="text-gray-600">新的电梯安全规范已发布，请查看详情</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;