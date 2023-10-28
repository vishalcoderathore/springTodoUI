import { Route, Routes, useNavigate } from 'react-router-dom';
import { SecurityContext } from './SecurityContext';
import PrivateRoute from './PrivateRoute';
import LandingPage from './LandingPage';
import LoginForm from './LoginForm';
import { useContext } from 'react';
import NotFound from './NotFound';
import Header from './Header';

const TodoApp: React.FC = () => {
  const navigate = useNavigate();
  const security = useContext(SecurityContext);

  if (!security) {
    throw new Error('SecurityContext not provided!');
  }

  const handleLogin = async (username: string, password: string): Promise<boolean> => {
    const success = await security.login(username, password); // Wait for the Promise to resolve
    if (success) {
      navigate(`/dashboard/${username}`);
    }
    return success;
  };

  const handleLogout = (): void => {
    security.logout();
    navigate('/');
  };

  return (
    <div className="App">
      <Header isLoggedIn={security.isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/dashboard/:username" element={<PrivateRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default TodoApp;
