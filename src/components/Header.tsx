import { useNavigate } from 'react-router-dom';
import React from 'react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleButtonClick = (): void => {
    if (isLoggedIn) {
      onLogout();
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        {/* Added me-auto class to push the button to the right */}
        <span className="navbar-brand mb-0 h1 me-auto">Todo Spring Boot</span>
        <button className="btn btn-primary" onClick={handleButtonClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  );
};

export default Header;
