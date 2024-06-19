 "use client"
import { createContext, useState, useContext, useEffect } from 'react';

const GlobalStateContext = createContext();

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

export const GlobalStateProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const phoneNumber = getCookie('user_phone_number');
    if (phoneNumber) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <GlobalStateContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
