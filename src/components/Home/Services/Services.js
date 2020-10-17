import React, { useEffect, useState } from 'react';

import ServiceCard from '../ServiceCard/ServiceCard';

import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <section className="container">
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h2>Provide Awesome <span className="span"> Services </span></h2>

            </div>
            <div className="row">
                {
                    services.map(service => <ServiceCard key={service._id} services={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;