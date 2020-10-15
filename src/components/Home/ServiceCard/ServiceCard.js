import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({services}) => {
    return (
        <div className="col-md-4 col-sm-12 col-sm-6">
            <div style={{textAlign:'center',marginBottom:'20px',marginTop:'20px'}}>
              
             <div className="service-card">
             <img className="img" src={services.icon} alt=""/>
                
                <h4> {services.name} </h4>
                  <small>{services.detail}</small>
             </div>
            </div>
        </div>
    );
};

export default ServiceCard;