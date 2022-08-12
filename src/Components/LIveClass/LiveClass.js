import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LiveClassCard from './LiveClassCard';

const LiveClass = () => {

    const [Lives, setLives] = useState([]);

    // const [blog,setBlog] = useBlogs(detailsId);

    useEffect(() => {
        fetch("https://rocky-escarpment-87440.herokuapp.com/lives")
            .then(res => res.json())
            .then(data => setLives(data.slice(0, 1)))
    }, [])

    return (
        <div className='flex h-screen justify-center items-center'>

            <div class="card  w-96 shadow-xl">

                {
                    Lives.map(live => <LiveClassCard
                        live={live} 
                    ></LiveClassCard>)
                }

            </div>
        </div>
    );
};

export default LiveClass;


