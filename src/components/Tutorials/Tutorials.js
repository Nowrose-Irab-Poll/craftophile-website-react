import React, { useEffect, useState } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';
import Tutorial from '../Tutorial/Tutorial';

const Tutorials = () => {

    const [videos, setVideos] = useState([])
    useEffect( ()=>{
        fetch('./tutorials.JSON')
        .then(res => res.json())
        .then(json => setVideos(json))
    } , [])

    return (
        <div className="mx-48 flex flex-col items-center">
            <h1 className="font-semibold text-4xl my-8">Tutorials: {videos.length}</h1>
            {
                videos.map(video => <Thumbnail key={videos.id} video={video}></Thumbnail>)
            }

            

        </div>
    );
};

export default Tutorials;