import React from 'react';
import SingleShowV1Data from '../../jsonData/SingleShowV1Data.json'
import SingleServiceV4 from './SingleShowCaseV1';
import ShowCaseProgress from './ShowCaseProgress';
import ShowCaseData from '../../jsonData/ShowCaseData.json'

const ShowCaseV1 = () => {
    return (
        <>
            <div className="service-range-area default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <h4 className="sub-title">Our secret</h4>
                            <h2 className="title mb-30">Build robust tailor-made systems... without coding!</h2>
                            <p>
                            No long development cycles. No costly delays. No dependencies.
                            Just a seamless, efficient transformation—built exactly as you envisioned it.
                            </p>
                            <ul className="list-double mt-40">
                                {SingleShowV1Data.map(service =>
                                    <SingleServiceV4 service={service} key={service.id} />
                                )}
                            </ul>
                        </div>
                        <div className="col-lg-6 offset-lg-1 col-xl-5 offset-xl-1">
                            
                                <div className="our-secret-thumb">
                                    <img src="/img/thumb/Artificial-intelligence.png" alt="Image Not Found" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowCaseV1;