import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { useParams } from 'react-router';

const Tutorial = () => {

    // const {id} = useParams()


    // const [videos, setVideos] = useState([])
    // useEffect( ()=>{
    //     fetch('../tutorials.JSON')
    //     .then(res => res.json())
    //     .then(json => {
    //         setVideos(json)
        
    //     })
    // } , [])

    // const vid = videos.find( v=> v.id === id)
    // const videoId = vid.videoId
    // console.log(videoId)

    // const url = `https://www.youtube.com/watch?v=${videoId}`

    // console.log(url)

    return (
        <div className="flex justify-center">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/pdwPBEDyqnQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

        </div>
    );
};

export default Tutorial;