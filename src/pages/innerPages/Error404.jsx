import React from 'react';
import HeaderV3 from '../../components/header/HeaderV3';
import Error404Content from '../../components/error404/Error404Content';
import FooterV1 from '../../components/footer/FooterV1';

const Error404 = () => {
    return (
        <>
            <HeaderV3 />
            <Error404Content />
            <FooterV1 />
        </>
    );
};

export default Error404;