import React, { useEffect, useState } from 'react';
import Thumbnail from '../Thumbnail/Thumbnail';


const Tutorials = (props) => {

    const [videos, setVideos] = useState([])
    useEffect( ()=>{
        fetch('./tutorials.JSON')
        .then(res => res.json())
        .then(json => setVideos(json))
    } , [])


    return (
            <div className="mx-48 flex flex-col items-center">
            <h1 className="font-semibold text-4xl my-8">Tutorials</h1>
            {
                videos.map(video => <Thumbnail key={video.id} video={video}></Thumbnail>)
            }

            

        </div>


    );
};

export default Tutorials;