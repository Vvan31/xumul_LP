import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SocialShare2 = () => {
    return (
        <>
            <li><Link to="https://www.instagram.com/xumulsolutions?igsh=dnltOWpubnN0NHZ2" target='_blank' ><i className="fab fa-instagram"></i></Link></li>
            <li><Link to="https://www.linkedin.com/company/xumul-solutions-corporation" target='_blank' ><i className="fab fa-linkedin-in"></i></Link></li>
        </>
    );
};

export default SocialShare2;