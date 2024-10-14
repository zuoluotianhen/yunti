import React from 'react';
import { ChevronRight } from 'lucide-react';

const Membership = () => {
  const membershipPlans = [
    { id: 1, name: '单次服务', price: '¥299', period: '单次' },
    { id: 2, name: '包月服务', price: '¥999', period: '每月' },
    { id: 3, name: '季度服务', price: '¥2699', period: '每季度' },
    { id: 4, name: '包年服务', price: '¥9999', period: '每年' },
  ];

  const handlePlanClick = (planId: number) => {
    // 这里可以添加跳转到详情页或显示购买对话框的逻辑
    console.log(`Clicked plan ${planId}`);
  };

  return (
    <div className="p-4 pb-24">
      <h1 className="text-2xl font-bold mb-4">会员专区</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-4">会员套餐</h3>
        <div className="space-y-4">
          {membershipPlans.map((plan) => (
            <div
              key={plan.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => handlePlanClick(plan.id)}
            >
              <div>
                <h4 className="font-semibold">{plan.name}</h4>
                <p className="text-sm text-gray-600">{plan.price} / {plan.period}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;