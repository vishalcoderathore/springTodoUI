import { useNavigate } from 'react-router-dom';
import React from 'react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Todo Spring Boot</span>
      <button
        className="btn btn-primary"
        onClick={(): void => {
          if (isLoggedIn) {
            onLogout();
          } else {
            navigate('/login');
          }
        }}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Header;
