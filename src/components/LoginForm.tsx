import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import Error from './Error';

interface LoginFormProps {
  onLogin: (username: string, password: string) => Promise<boolean>;
}

const InputField: FC<{
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, id, placeholder, value, onChange }) => (
  <input type={type} className="form-control" id={id} placeholder={placeholder} value={value} onChange={onChange} />
);

const LoginForm: FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLoginAttempt = async (e: React.FormEvent): Promise<void> => {
    // Updated to async
    e.preventDefault();
    const loginSuccess = await onLogin(email, password); // Using await to get the result
    if (!loginSuccess) {
      setErrorMessage('Invalid credentials. Please try again.');
    } else {
      setErrorMessage(null);
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    handleLoginAttempt(e).catch(error => {
      console.error('Login failed:', error);
      setErrorMessage('An error occurred. Please try again.');
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              {errorMessage && <Error message={errorMessage} />}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <InputField
                    type="text"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e): void => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <InputField
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e): void => setPassword(e.target.value)}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={(): void => setShowPassword(!showPassword)}
                          style={{ cursor: 'pointer' }}
                          size="xl"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
