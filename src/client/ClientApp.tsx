import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from '../pages/Home';
import Messages from '../pages/Messages';
import Membership from '../pages/Membership';
import Profile from '../pages/Profile';
import PrivacyAgreement from '../components/PrivacyAgreement';
import Login from '../components/Login';

const ClientApp: React.FC = () => {
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePrivacyAgree = () => {
    setAgreedToPrivacy(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!agreedToPrivacy) {
    return <PrivacyAgreement onAgree={handlePrivacyAgree} />;
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow pb-16">
        <Routes>
          <Route path="/client" element={<Home />} />
          <Route path="/client/messages" element={<Messages />} />
          <Route path="/client/membership" element={<Membership />} />
          <Route path="/client/profile" element={<Profile />} />
        </Routes>
      </div>
      <Navigation />
    </div>
  );
};

export default ClientApp;