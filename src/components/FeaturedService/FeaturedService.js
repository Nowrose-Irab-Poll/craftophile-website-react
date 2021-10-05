import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faShoppingBag, faChalkboardTeacher, faFistRaised, faHandshake } from '@fortawesome/free-solid-svg-icons'

const FeaturedService = (props) => {

    const {name, icon, description}= props.service;


    const icons = {
        'faShoppingBag': faShoppingBag,
        'faChalkboardTeacher': faChalkboardTeacher,
        'faFistRaised': faFistRaised,
        'faHandshake': faHandshake,
    };


    
    return (
        <div className="p-1 m-8 flex justify-center">
            <div className='p-2 py-8 bg-blue-900 w-9/12 rounded-lg'>
                <div className="flex justify-center sm:text-6xl md:text-6xl text-yellow-400">
                    <FontAwesomeIcon icon={icons[icon]}></FontAwesomeIcon>
                </div>
                <h2 className="font-mono text-white text-center md:text-3xl font-semibold mt-2">{name}</h2>
                <p className="font-mono text-white font-semibold">{description}</p>


            </div>
        </div>
    );
};

export default FeaturedService;