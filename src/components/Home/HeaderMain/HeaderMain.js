import React from 'react';
import './HeaderMain.css';
import image from '../../../creative-agency-main/images/logos/Frame.png'
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main className="container">

            <div style={{ height: '600px' }} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h2 style={{ fontFamily: 'arial-bold' }}>Let's Grow Your Brand To The Next Level</h2>
                    <p>working hard carry's bright future otherwise you will face extraordinary problem</p>
                    <br />
                    <Link to="/login">
                        <button className="btn btn-dark">Hire Us</button>
                    </Link>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={image} alt="" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;