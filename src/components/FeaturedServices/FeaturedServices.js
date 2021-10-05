import React, { useEffect, useState } from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faShoppingBag, faChalkboardTeacher, faFistRaised, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const FeaturedServices = () => {

    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(json => setServices(json))
    }, [])


    return (
        <div className="m-4">
            <h2 className="font-bold text-4xl">Services : {services.length}</h2>
            <div  className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
                {
                    services.map( service => <FeaturedService key={service.icon} service={service}></FeaturedService>
                    )
                }

            </div>
            <div className="flex justify-center py-4">
                <NavLink to="/services">

                    <div className="w-80 flex justify-center md:text-3xl m-1 p-4 text-white rounded-lg font-semibold bg-yellow-500 hover:bg-yellow-400">
                        <p>View all Services</p>
                        <span className="mx-2">
                            <FontAwesomeIcon icon={faArrowAltCircleRight}/>

                        </span>
                    </div>
                </NavLink>

            </div>

        </div>

    );
};

export default FeaturedServices;