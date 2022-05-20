import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import Slideshow from './Slideshow';

const SliderExhibitions = () => {
    const [data, setData] = useState({});
    const [width, setWidth] = useState('');

    // GET CONTEXT VALUE
    const { w } = useContext(AppContext);

    useEffect(() => {
        axios
            .get(`https://api.artic.edu/api/v1/exhibitions?limit=24`)
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
            setWidth(w / 2);
        } else if (w > 650) {
            setWidth(w / 1);
        }
    }, [w]);

    return (
        <div className="w-full rounded-xl container mx-auto">
            {/* TITLE */}
            <h1 className="font-semibold text-2xl py-2 pl-8">
                Latest Exhibitions
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
                                    src={`${data.image_url}`}
                                    onError={(event) =>
                                        (event.target.src =
                                            'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                    }
                                    alt="Artwork"
                                    className="w-full h-80 md:h-64 object-cover rounded-md my-4 overflow-hidden opacity-90 hover:opacity-100"
                                />
                                <h1 className="font-semibold text-lg pb-1">
                                    {data.title}
                                </h1>
                                <div className="flex justify-between flex-wrap">
                                    <p>{data.artist_title}</p>
                                    <p className="italic">{data.date_end}</p>
                                </div>
                            </div>
                        </div>
                        // SLIDE ENDS HERE
                    ))}
            </Slideshow>
        </div>
    );
};

export default SliderExhibitions;
