"use client"
import React, { useState } from 'react';
import { useLanguage } from '@/app/languagecontext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { language } = useLanguage(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(username, password);
    if (!result.success) {
      alert('Login failed: ' + result.message);
    }
  };

  const translations = {
    en: {
      loggedInMessage: 'You are already logged in.',
      loginHeader: 'Login',
      usernameLabel: 'Username:',
      passwordLabel: 'Password:',
      loginButton: 'Login',
    },
    mr: {
      loggedInMessage: 'तुम्ही आधीच लॉग इन आहात.',
      loginHeader: 'लॉगिन',
      usernameLabel: 'वापरकर्तानाव:',
      passwordLabel: 'पासवर्ड:',
      loginButton: 'लॉगिन',
    },
    hi: {
      loggedInMessage: 'आप पहले से ही लॉग इन हैं।',
      loginHeader: 'लॉगिन',
      usernameLabel: 'उपयोगकर्ता नाम:',
      passwordLabel: 'पासवर्ड:',
      loginButton: 'लॉगिन',
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg p-10 border w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">{translations[language].loginHeader}</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-group">
            <label className="block mb-2 font-medium text-gray-700">
              {translations[language].usernameLabel}
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label className="block mb-2 font-medium text-gray-700">
              {translations[language].passwordLabel}
              <input
                type="password"
                className="block w-full p-2 border border-gray-300 rounded mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#044203] text-white rounded hover:bg-[#044203] transition duration-200"
          >
            {translations[language].loginButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

