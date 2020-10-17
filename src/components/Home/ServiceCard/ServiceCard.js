import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ services }) => {


    return (


        <div className="col-md-4 col-sm-12 col-sm-6">
            <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>

                <div className="service-card">

                    {
                        services.image ? <img style={{ height: '100px' }} src={`data:image/png;base64,${services.image.img}`} />
                            :
                            <img style={{ height: '100px' }} className="img-fluid mb-3" src={`https://mighty-inlet-60591.herokuapp.com/${services.img}`} alt="" />
                    }



                    <Link to={`/order/${services.name}`}>  <h4> {services.name} </h4>  </Link>
                    <small>{services.description}</small>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;