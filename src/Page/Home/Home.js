import React from 'react';
import Banner from './Banner/Banner';
import Design from './Design/Design';
import DesignArchitect from './Design/DesignArchitect';
import Pricing from './Pricing/Pricing';
import Stats from './Stats/Stats';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats/>
            <DesignArchitect/>
            <Pricing/>
        </div>
    );
};

export default Home;