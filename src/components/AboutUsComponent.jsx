import React, { useState, useEffect } from 'react';
import { useFirebaseContext } from '../providers/FirebaseProvider';
import { collection, getDocs } from 'firebase/firestore';

export const AboutUsComponent = () => {
    const { myFS } = useFirebaseContext();
    const [randomComments, setRandomComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const responseCollectionRef = collection(myFS, 'responses');
                const snapshot = await getDocs(responseCollectionRef);
                const allComments = snapshot.docs.map(doc => doc.data());
                const shuffledComments = [...allComments].sort(() => Math.random() - 0.5);
                const selectedComments = shuffledComments.slice(0, 5);
                setRandomComments(selectedComments);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchComments();
    }, [myFS]);

    return (
        <div className="main">
            <div className="container-fluid px-lg-5">
                <p className="merits-title padding-title">What People Say About Us</p>
                <div className="about-us-content d-flex justify-content-center">
                    <div className="comments-container">
                        {randomComments.map((comment, index) => (
                            <div key={index} className="response-div">
                                <p className='response-title'>{comment.userName}</p>
                                <p className='response-text'>{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
