import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="">
        <div className="row ">
            <div className="footer mb-2">
                <div className="col-md-4">
                    <i className="fas fa-truck-moving"></i>
                    <h3>Best Service Award</h3>
                    <p>Erened best service award 2017</p>
                </div>
                <div className="col-md-4">
                    <i className="fas fa-money-check-alt"></i>
                    <h3>Verified Service Providers</h3>
                    <p>More than 35000 service providers</p>
                </div>
                <div className="col-md-4"> 
                     <i className="fas fa-heartbeat"></i>
                    <h3>User Friendly Focused</h3>
                    <p>Given attention to rich user experience</p>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Footer;