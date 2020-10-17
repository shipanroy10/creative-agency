import React, { useEffect, useState } from 'react';
import UserFeedbackCard from '../UserFeedbackCard/UserFeedbackCard';
import './UserFeedback.css';


const UserFeedback = () => {

    const [userFeedBack, setUserFeedBack] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setUserFeedBack(data)
            })


    }, [])

    console.log(userFeedBack);
    return (
        <div className="container">
            <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}>
                <h3>Clients  <span className="span"> Feedback</span></h3>
            </div>
            <div className="row">


                {
                    console.log(userFeedBack)
                }
                {
                    userFeedBack.map(feedbacks => <UserFeedbackCard key={feedbacks._id} feedbacks={feedbacks}>   </UserFeedbackCard>)
                }
            </div>
        </div>
    );
};

export default UserFeedback;