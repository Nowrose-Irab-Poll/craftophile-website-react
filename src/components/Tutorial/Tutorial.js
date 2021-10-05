import React from 'react';
import { useParams } from 'react-router';

const Tutorial = () => {

    const videoId = useParams();
    console.log(videoId);

    return (
        <div className="flex justify-center">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/pdwPBEDyqnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    );
};

export default Tutorial;