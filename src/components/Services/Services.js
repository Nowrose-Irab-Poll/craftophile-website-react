import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {


    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(json => setServices(json))
    }, [])


    return ( 
        <div className="mx-48 flex flex-col items-center">
            <h1 className="font-semibold text-4xl my-8">Our Offered Services</h1>
            {
                services.map( service => <Service key={service.icon} service={service}></Service>)
            }
        </div>
    );
};

export default Services;