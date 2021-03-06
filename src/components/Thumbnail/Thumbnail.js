import React from 'react';
import { NavLink } from 'react-router-dom';

const Thumbnail = (props) => {

    const {id, title, description, videoId} = props.video
    const url = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`

    const link = `https://www.youtube.com/watch?v=${videoId}`
    

    return (
        <div className="m-8">
        <a target="_blank" rel="noreferrer" href={link}>
            <div className="flex bg-blue-900 text-white rounded-lg p-8 w-11/12 justify-around hover:bg-blue-800">
                <div>
                    <img className="rounded-lg" src={url} alt={url} />
                </div>


                <div className="m-4">
                    <h2 className="font-bold text-2xl mb-8">{title}</h2>
                </div>
            </div>

        </a>


        </div>
    );
};

export default Thumbnail;