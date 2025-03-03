import React from 'react';
import SocialShare2 from '../others/SocialShare2';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <div className="mb-40">
                    <h2>Contact Information</h2>
                   
                </div>
                <ul className="contact-address">
                    <li className="wow fadeInUp">
                        <div className="content">
                            <h4 className="title">Phone</h4>
                            <a href="tel:+17786810425">+17786810425</a>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="300ms">
                        <div className="info">
                            <h4 className="title">Location</h4>
                            <p>
                                Vancouver, CA
                            </p>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="500ms">
                        <div className="info">
                            <h4 className="title">Email</h4>
                            <a href="mailto:info@digital.com.com">xumulsolutions@gmail.com</a>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="700ms">
                        <div className="info">
                            <h4 className="title">Follow Us</h4>
                            <ul className="social-link">
                                <SocialShare2 />
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;