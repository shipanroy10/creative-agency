import React from 'react';
import UserFeedbackCard from '../UserFeedbackCard/UserFeedbackCard';
import './UserFeedback.css';
import customer from '../../../creative-agency-main/images/customer-1.png';
import customer1 from '../../../creative-agency-main/images/customer-2.png';
import customer2 from '../../../creative-agency-main/images/customer-3.png';

const userFeedback =[
    {name:'Nash patrik',img:customer,feedback:' this is the best way make website the reason is why it has special workers '},
    {name:'Miraim barron',img:customer1,feedback:' this is the best way make website the reason is why it has special workers '},
    {name:'Bria malone',img:customer2,feedback:' this is the best way make website the reason is why it has special workers '},

]

const UserFeedback = () => {
    return (
        <div className="container">
           <div style={{textAlign:'center',marginTop:'50px',marginBottom:'20px'}}>
           <h3>Clients  <span className="span"> Feedback</span></h3>
           </div>
          <div className="row">

          {
                userFeedback.map(feedback=><UserFeedbackCard feedback={feedback}></UserFeedbackCard>)
            }
          </div>
        </div>
    );
};

export default UserFeedback;