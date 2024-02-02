import React, { useState, useRef } from 'react';
import { Header } from '../components/Header';
import { useAuthContext } from '../providers/AuthProvider';
import { useFirebaseContext } from '../providers/FirebaseProvider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const addResponseToFirestore = async (myFS, user, displayName, text) => {
  try {
    const responseCollectionRef = collection(myFS, 'responses');
    const responseDocData = {
      userId: user.uid,
      userName: displayName,
      text: text,
      dateCreated: serverTimestamp(),
    };
    console.log(responseDocData);
    await addDoc(responseCollectionRef, responseDocData);
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export const Response = () => {
  const { myFS } = useFirebaseContext();
  const { user, profile } = useAuthContext();
  const [feedbackError, setFeedbackError] = useState(null);
  const textAreaRef = useRef(null);

  const PublicComment = async () => {
    try {
      const textAreaValue = textAreaRef.current.value;
      if (!textAreaValue || textAreaValue.length < 50) {
        setFeedbackError("The length of the feedback should be at least 50 letters!");
        return;
      }
      if (textAreaValue.length > 1000) {
        setFeedbackError("Your feedback is so big!");
        return;
      }
      const isSuccess = await addResponseToFirestore(myFS, user, profile.displayName, textAreaValue);
      if (isSuccess) {
        textAreaRef.current.value = "";
        setFeedbackError('Successully!');
      } else {
        setFeedbackError("Failed to publish the feedback. Please try again.");
      }
    } catch (error) {
      console.error(error.message);
      setFeedbackError("An error occurred while publishing the feedback. Please try again.");
    }
  };

  return (
    <div className='main'>
      <Header />
      <div className="user-div container-fluid px-lg-5">
        <p className="page-titles py-4">Your response</p>
        <div className="user-content">
          <p className='user-text'>Leave your response about your travel.</p>
          <textarea ref={textAreaRef} id="response-text-area"></textarea>
          {feedbackError && <p className="error-message">{feedbackError}</p>}
          <button className='packages-button' onClick={PublicComment}>Publish</button>
        </div>
      </div>
    </div>
  );
};
