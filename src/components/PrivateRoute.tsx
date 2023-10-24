// PrivateRoute.tsx
import { SecurityContext } from './SecurityContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import Dashboard from './Dashboard';

const PrivateRoute: React.FC = () => {
  const navigate = useNavigate();
  const security = useContext(SecurityContext);

  if (!security) {
    throw new Error('SecurityContext not provided!');
  }

  useEffect(() => {
    if (!security.isLoggedIn) {
      navigate('/'); // Redirect to login if not logged in
    }
  }, [security.isLoggedIn, navigate]);

  return security.isLoggedIn ? <Dashboard /> : null;
};

export default PrivateRoute;
