import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../providers/AuthProvider';
import { Header } from '../components/Header';

export const User = () => {

  const { profile, logout } = useAuthContext();

  if (!profile) {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <div className='main'>
      <Header />
      <div className="user-div container-fluid px-lg-5">
        <p className="page-titles py-4">User account</p>
        <div className="user-content">
          <p className='user-text'>Hello {profile.displayName || "[no name]"}</p>
          <p className='user-text'>Your email: {profile.email}</p>
          <button className='user-button' onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};