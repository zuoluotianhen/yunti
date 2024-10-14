import React from 'react';

const Messages = () => {
  const messages = [
    { id: 1, sender: '系统通知', content: '您的电梯已完成年度检修', time: '2024-03-15 10:30' },
    { id: 2, sender: '维保人员', content: '下周二上午9点将进行例行维护', time: '2024-03-14 15:45' },
  ];

  return (
    <div className="p-4 pb-16">
      <h1 className="text-2xl font-bold mb-4">消息</h1>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{message.sender}</h3>
              <span className="text-xs text-gray-500">{message.time}</span>
            </div>
            <p className="text-gray-600">{message.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;