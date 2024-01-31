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
  };

  const handleButtonClick = async () => {
    setLoginRunning(true);
    let success = await login(email, password);
    console.log("login result:", success)
    setLoginRunning(false);
    if (!success) {
      setErrorMessage('Login failed!');
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
                {(errorMessage || authErrorMessages) && (
                  <>
                    <br />
                    <h3 style={{ color: 'red' }}>{errorMessage}</h3>
                    {authErrorMessages?.map((errorLine, idx) => (
                      <h4 key={`errmsg-${idx}`} style={{ color: 'red' }}>
                        {errorLine}
                      </h4>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
