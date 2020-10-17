import React from 'react';
import './UserFeedbackCard.css'

const UserFeedbackCard = (props) => {
    const feedbacks = props.feedbacks;
    console.log(feedbacks)


    return (
        <div className="col-md-4 col-sm-12 col-sm-6">
            <div className="user-card">
                <div className="user-img">
                    {
                        feedbacks.image ? <img style={{ height: '100px' }} src={`data:image/png;base64,${feedbacks.image.img}`} />
                            :
                            <img style={{ height: '100px' }} className="img-fluid mb-3" src={`http://localhost:5000/${feedbacks.img}`} alt="" />
                    }
                    <h4> {feedbacks.name}  </h4>
                </div>
                <p>{feedbacks.companyName}</p>
                <p>{feedbacks.description}</p>
            </div>
        </div>
    );
};

export default UserFeedbackCard;