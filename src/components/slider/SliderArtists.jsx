import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import Slideshow from './Slideshow';

const SliderArtists = () => {
    const [data, setData] = useState({});
    const [width, setWidth] = useState('');

    // GET CONTEXT VALUE
    const { w } = useContext(AppContext);

    useEffect(() => {
        axios
            .get(`https://api.artic.edu/api/v1/artists`)
            .then((res) => {
                const galleries = res.data.data;
                setData(galleries);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // CHANGE SLIDE WIDTH WITH SCREEN CHANGE
    useEffect(() => {
        if (w >= 1280) {
            setWidth(w / 5);
        } else if (w > 650) {
            setWidth(w / 3);
        } else if (w < 650) {
            setWidth(w / 1);
        }
    }, [w]);

    return (
        <div className="w-full rounded-xl container mx-auto">
            {/* TITLE */}
            <h1 className="font-semibold text-2xl py-2 pl-8">
                Featured Artworks
            </h1>
            {/* SLIDESHOW */}
            <Slideshow autoplay={false} navigation={true}>
                {data.length > 1 &&
                    data.map((data, index) => (
                        // SLIDE GOES HERE
                        <div key={index} className="w-full">
                            <div
                                className="p-8  hover:bg-off-1/0 border-[1px] border-off-1/0 hover:border-[1px] hover:border-off-2 md:hover:bg-off-1 rounded-md"
                                style={{ width: `${width}px` }}
                            >
                                <img
                                    src={`https://api.artic.edu/api/v1/artworks/${data.artwork_ids[0]}?fields=id,title,image_id,artwork_ids`}
                                    onError={(event) =>
                                        (event.target.src =
                                            'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                    }
                                    alt="Artwork"
                                    className="w-full md:h-64 object-cover rounded-md my-4 overflow-hidden opacity-90 hover:opacity-100"
                                />
                                <h1 className="font-semibold text-lg pb-1">
                                    {data.title}
                                </h1>
                                <div className="flex justify-between flex-wrap">
                                    <p>{data.artist_title}</p>
                                    <p className="italic">{data.artwork_ids[0]}</p>
                                </div>
                            </div>
                        </div>
                        // SLIDE ENDS HERE
                    ))}
            </Slideshow>
        </div>
    );
};

export default SliderArtists;
