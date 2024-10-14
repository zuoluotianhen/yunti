import React, { useState } from 'react';

interface PrivacyAgreementProps {
  onAgree: () => void;
}

const PrivacyAgreement: React.FC<PrivacyAgreementProps> = ({ onAgree }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleAgree = () => {
    setIsOpen(false);
    onAgree();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">用户隐私保护指引</h2>
        <div className="mb-4 h-60 overflow-y-auto text-sm text-gray-600">
          <p>尊敬的用户，欢迎使用我们的电梯维保小程序。在使用我们的服务之前，请仔细阅读以下隐私保护指引：</p>
          <ol className="list-decimal pl-5 space-y-2 mt-2">
            <li>我们收集的信息：我们可能会收集您的手机号码、微信账号等个人信息，用于账号登录和服务提供。</li>
            <li>信息使用：我们仅将收集的信息用于提供、维护和改进我们的服务，以及法律要求的用途。</li>
            <li>信息保护：我们采取严格的安全措施保护您的个人信息，防止未经授权的访问、使用或泄露。</li>
            <li>第三方共享：除非得到您的明确同意或法律要求，我们不会与第三方分享您的个人信息。</li>
            <li>您的权利：您有权访问、更正或删除您的个人信息，也可以随时撤回您的同意。</li>
          </ol>
          <p className="mt-2">点击"同意并继续"即表示您已阅读、理解并同意我们的隐私保护指引。</p>
        </div>
        <button
          onClick={handleAgree}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          同意并继续
        </button>
      </div>
    </div>
  );
};

export default PrivacyAgreement;