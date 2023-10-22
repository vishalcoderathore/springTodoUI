import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => boolean;
}

const LoginForm: FC<LoginFormProps> = ({ onLogin }) => {
  // State initialization
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Handler to update email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  // Handler to update password
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  // Toggle password visibility
  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const isSuccess = onLogin(email, password); // Capture the boolean returned from onLogin
    if (!isSuccess) {
      setErrorMessage('Invalid credentials. Please try again.'); // Set error message
    } else {
      setErrorMessage(null); // Clear error message
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              {/* Display error message if it's present */}
              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="input">Email address</label>
                  <input
                    type="input"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={togglePasswordVisibility}
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
