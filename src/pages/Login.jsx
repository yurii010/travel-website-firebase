import { useState, useEffect } from 'react';
import { useAuthContext } from '../providers/AuthProvider';
import { Register } from '../components/Register';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { login, authErrorMessages, profile } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginRunning, setLoginRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const toggleShowRegisterScreen = () => {
    setShowRegisterForm((currVal) => !currVal);
    setEmail('');
    setPassword('');
    setErrorMessage(null);
  };

  const handleButtonClick = async () => {
    setLoginRunning(true);
    let success = await login(email, password);
    setLoginRunning(false);
    if (!success) {
      setErrorMessage("Oops! Something went wrong during registration.");
    };
  };
  useEffect(() => {
    if (profile) {
      navigate('/user');
    }
  }, [profile, navigate]);

  return (
    <div className='main'>
      <Header />
      <div className="container-fluid px-lg-5 login-form d-flex justify-content-center p-4">
        {showRegisterForm ? (
          <Register toggleShowRegisterScreen={toggleShowRegisterScreen} />
        ) : (
          <div className="form-container">
            <h2>Login</h2>
            <div id="form">
              <div className="form-group">
                <label>Username:</label>
                <input
                  type='text'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button className="switch-to-register" onClick={toggleShowRegisterScreen}>
                  Don't have an account? Register here.
                </button>
              </div>
              <div className="form-group">
                <button className="button-in-form" onClick={handleButtonClick}>
                  Login
                </button>
                {errorMessage && (
                  <p className="error-message pt-4">{errorMessage}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
