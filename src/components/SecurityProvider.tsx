// Security.tsx
import { SecurityContext } from './SecurityContext';
import React, { useState } from 'react';

const HARDCODED_USERNAME = 'admin';
const HARDCODED_PASSWORD = 'password';

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username: string, password: string): boolean => {
    if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    setIsLoggedIn(false);
  };

  return <SecurityContext.Provider value={{ isLoggedIn, login, logout }}>{children}</SecurityContext.Provider>;
};
