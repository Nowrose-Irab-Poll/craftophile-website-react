import React from 'react';

const Service = (props) => {

    const {name, icon, description, img}= props.service;

    return (
        <div className="flex bg-blue-900 text-white m-8 rounded-lg p-8 w-9/12 justify-around">
            <div>
                <img className="h-60 w-60 sm:h-48 sm:w-48 rounded-lg" src={img} alt={img} />

            </div>


            <div>
                    <h2 className="font-bold text-4xl mb-8">{name}</h2>
                    <p className="font-semibold text-2xl">{description}</p>
                </div>
            </div>

    );
};

export default Service;