import React from 'react';
import ServiceV1Data from '../../jsonData/ServiceV1Data.json'
import SingleServicesV1 from './SingleServicesV1';

const ServicesV1 = () => {
    // backgroundImage: "linear-gradient( rgba(2, 31, 33, 0.6),rgba(8, 88, 94, 0.3), rgba(107,25,239, 0.5) ), url(/img/shape/banner-9.JPG)"}}>
    return (
        <>
    
            <div className="default-padding box-layout overflow-hidden bottom-less services-style-one-area bg-gray bg-cover" style={{ backgroundImage: "url(/img/shape/banner-6.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Services we offer</h5>
                                <h2 className="titlev2">Turn Information <br /> Into Actionable Insights</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ServiceV1Data.slice(0, 3).map(service =>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={service.id}>
                                <SingleServicesV1 service={service} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;