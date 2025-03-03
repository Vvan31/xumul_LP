import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

const AboutV1 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="about-style-one bg-dark text-light" style={{ backgroundImage: "url(img/shape/7.png)" }}>
                                <h3>
                                To stay ahead of the competition, you need true differentiators.
                                </h3>
                                <h3>
                                So why settle for the same outdated, one-size-fits-all system your competitors use?
                                </h3>
                                <h3>
                                Be free to design a solution that <strong>truly</strong> gives your business an edge.
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="about-style-one">
                                <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-0 mb-xs-0 mt-md-50 mt-xs-30">Stand Out. <br /><strong>Win </strong> the Market.</h2>
                                <div className="thumb" style={{ backgroundImage: "url(img/banner/grow.png)", backgroundRepeat: "no-repeat", backgroundSize:"contain", backgroundPosition:"center center"}}>
                                    {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tT2puL7IZOE" onClose={() => setOpen(false)} />
                                    <Link className="mfp-iframe popup-youtube video-play-button with-text mt-20" onClick={() => setOpen(true)}>
                                        <div className="effect"></div>
                                        <span><i className="fa-solid fa-play"></i> OUR STORY</span>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;