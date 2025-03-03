import React from 'react';
import AboutV3ListData from '../../jsonData/AboutV3ListData.json'
import CountUp from 'react-countup';

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area default-padding overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-three">
                            <div className="about-three-thumb">
                                <img src="/img/thumb/6.jpg" alt="Image Not Found" />
                                {/* <img src="/img/thumb/5.jpg" alt="Image Not Found" /> */}
                                <div className="experience">
                                    <h2><strong><CountUp end={30} duration={3} enableScrollSpy /></strong> Years of experience</h2>
                                </div>
                                <div className="animated-shape">
                                    <img src="/img/shape/38.png" alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-style-three">
                            <div className="about-three-info">
                                <h4 className="sub-title">About our company</h4>
                                <h2 className="title">Working together <br /> to deliver value </h2>
                                <p>
                                Establish in your company a deep digital transformation from the core of your organization, empowering your staff to be able to redesign, digitize, and continuously improve their own processes with the most advanced techniques and tools of artificial intelligence.
                                </p>
                                <ul className="list-grid-four">
                                    {AboutV3ListData.map(about =>
                                        <li key={about.id}>{about.item}</li>
                                    )}
                                </ul>
                                <div className='about-author-group'>
                                    <div className="about-author">
                                        <div className="thumb">
                                            <img src="/img/team/elisa_cofounder.jpeg" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4>Maria Elisa Osorio</h4>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>

                                    <div className="about-author">
                                        <div className="thumb">
                                            <img src="/img/team/vivian_cofounder.jpeg" alt="Image Not Found" />
                                        </div>
                                        <div className="info">
                                            <h4>Viviana Osorio</h4>
                                            <span>CEO & Founder</span>
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

export default AboutV3;