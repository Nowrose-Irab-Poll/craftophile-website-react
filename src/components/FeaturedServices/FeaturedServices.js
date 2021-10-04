import React from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';

const FeaturedServices = () => {
    return (
        <div  className='flex'>
            <FeaturedService></FeaturedService>
            <FeaturedService></FeaturedService>
            <FeaturedService></FeaturedService>
            <FeaturedService></FeaturedService>
        </div>
    );
};

export default FeaturedServices;