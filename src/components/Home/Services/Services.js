import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import icon1 from '../../../creative-agency-main/images/icons/service1.png';
import icon2 from '../../../creative-agency-main/images/icons/service2.png';
import icon3 from '../../../creative-agency-main/images/icons/service3.png';

import './Services.css';
const servicesData = [
{name:'Web & Mobile Design',
detail:'we are the  best because we believe in practical work.we have been doing this with love that is why we deserve best',
icon:icon1},
{name:'Graphics Design',
detail:'we are the  best because we believe in practical work.we have been doing this with love that is why we deserve best',
icon:icon2},
{name:'Web development',
detail:'we are the  best because we believe in practical work.we have been doing this with love that is why we deserve best',
icon: icon3}

]
const Services = () => {
    return (
       <section className="container">
           <div style={{textAlign:'center',marginTop:'20px'}}>
           <h2>Provide Awesome <span className="span"> Services </span></h2>

           </div>
           <div className="row">
               {
                   servicesData.map(service=><ServiceCard services={service}></ServiceCard>)
               }
           </div>
       </section>
    );
};

export default Services;