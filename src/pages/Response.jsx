import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../providers/AuthProvider';
import { Header } from '../components/Header';

export const Response = () => {
  const { profile } = useAuthContext();

  if (profile) {
    <Navigate to="/response" />;
  } else if (!profile) {
    <Navigate to="/login" />;
  }

  const PublicComment = () => {
    const textArea = document.getElementById("#response-text-area");
    if (textArea == "" && textArea.length < 50) {
      alert("The length of the feedback should be at least 50 letters!")
    } else {

    }
  }

  return (
    <div className='main'>
      <Header />
      <div className="user-div container-fluid px-lg-5">
        <p className="page-titles py-4">Your response</p>
        <div className="user-content">
          <p className='user-text'>Leave your response about your travel.</p>
          <textarea name="response-area" id="response-text-area"></textarea>
          <button className='packages-button' onClick={PublicComment}>Publish</button>
        </div>
      </div>
    </div>
  );
};
