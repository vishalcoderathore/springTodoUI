// Security.tsx
import { SecurityContext } from './SecurityContext';
import { LOGIN_URL } from '../api/apiRoutes';
import React, { useState } from 'react';

interface SecurityProviderProps {
  children: React.ReactNode;
}

export const SecurityProvider: React.FC<SecurityProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        return true;
      }
    } catch (error) {
      console.error('Login error:', error);
    }
    return false;
  };

  const logout = (): void => {
    setIsLoggedIn(false);
  };

  return <SecurityContext.Provider value={{ isLoggedIn, login, logout }}>{children}</SecurityContext.Provider>;
};
