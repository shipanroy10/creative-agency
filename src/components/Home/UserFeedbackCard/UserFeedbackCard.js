import React from 'react';
import './UserFeedbackCard.css'

const UserFeedbackCard = ({feedback}) => {
    return (
        <div className="col-md-4 col-sm-12 col-sm-6">
           <div className="user-card">
           <div className="user-img">
            <img src={feedback.img} alt=""/>
            <h4>{feedback.name}</h4>
            </div>
    <p>{feedback.feedback}</p>
           </div>
        </div>
    );
};

export default UserFeedbackCard;