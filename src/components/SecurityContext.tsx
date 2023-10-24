// SecurityContext.tsx
import { createContext } from 'react';

interface SecurityContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const SecurityContext = createContext<SecurityContextType | undefined>(undefined);
