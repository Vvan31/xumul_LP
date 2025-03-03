import React from 'react';
import { toast } from 'react-toastify';
import ReactWOW from 'react-wow';

const BlogV3 = () => {

    const handleEmail = (event) => {
        event.preventDefault();
        // Open user's email client with a pre-filled subject and body
        window.location.href = `mailto:xumulsolutions@gmail.com?subject=Subscription Request&body=Hello, I would like to know more about Xumul!`;
        event.target.reset();
    }

    return (
        <>
            <div className="banner-style-three-area overflow-hidden" style={{ backgroundImage: "url(/img/shape/banner-3.jpg)" }}>
                <div className="banner-style-three pt-150 pt-md-120 pt-xs-60">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6 pr-50 pr-md-15 pr-xs-15 mt--80 mt-md-0 mt-xs-0">
                                    <div className="information">
                                        <ReactWOW animation='fadeInUp' duration="400ms" delay="500ms">
                                            <h2>Empower <br /> <strong>Your</strong> Digital Transformation</h2>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInUp' delay="900ms" duration="400ms">
                                            <p>
                                            At Xumul, we are revolutionizing the landscape of accelerated digital transformation through cutting-edge Artificial Intelligence and streamlined process systematization.                                            </p>
                                        </ReactWOW>
                                        <ReactWOW animation='fadeInDown' delay="1200ms" duration="400ms">
                                            <div className="newsletter-form">
                                                <form onSubmit={handleEmail}>
                                                    <button type="submit">Get in contact</button>
                                                </form>
                                            </div>
                                        </ReactWOW>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <ReactWOW animation='fadeInDown'>
                                            <img src="/img/illustration/33.png" alt="Thumb"  style={{width: "540px", height: "550px", objectFit: "cover"}}/>
                                        </ReactWOW>
                                        <div className="progress-card">
                                            <div className="icon">
                                                <i className="flaticon-startup-5"></i>
                                            </div>
                                            <div className="info">
                                                <p>Ready in just 4 weeeks!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV3;