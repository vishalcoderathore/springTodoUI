import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';
import NotFound from './NotFound';
import Header from './Header';

interface PrivateRouteProps {
  isLoggedIn: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/'); // Redirect to login if not logged in
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? <Dashboard /> : null;
};

const TodoApp: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const HARDCODED_USERNAME = 'admin';
  const HARDCODED_PASSWORD = 'password';

  const handleLogin = (username: string, password: string): boolean => {
    if (username === HARDCODED_USERNAME && password === HARDCODED_PASSWORD) {
      setIsLoggedIn(true);
      navigate(`/dashboard/${HARDCODED_USERNAME}`);
      return true; // login was successful
    } else {
      return false; // login failed
    }
  };

  const handleLogout = (): void => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/dashboard/:username" element={<PrivateRoute isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default TodoApp;
