import React from 'react';
import './Allpng.css';
import ist from '../../../creative-agency-main/images/logos/airbnb.png'
import snd from '../../../creative-agency-main/images/logos/google.png';
import trd from '../../../creative-agency-main/images/logos/netflix.png';
import froth from '../../../creative-agency-main/images/logos/slack.png';
import fifth from '../../../creative-agency-main/images/logos/uber.png';



const Allpng = () => {
    return (
        <div className="container">
            <div className="row  ml-5">
                <div className="col-md-2">
                    <img src={froth} alt="" />
                </div>

                <div className="col-md-2">
                    <img src={snd} alt="" />
                </div>
                <div className="col-md-2">
                    <img src={fifth} alt="" />
                </div>
                <div className="col-md-2">
                    <img src={trd} alt="" />
                </div>
                <div className="col-md-2">
                    <img src={ist} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Allpng;