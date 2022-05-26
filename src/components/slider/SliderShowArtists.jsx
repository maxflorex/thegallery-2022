import { query } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { colRefArtist } from '../../firebase/config';
import UseFirestore from '../../hooks/useFirestore';
import Slideshow from './Slideshow';

const SliderShowArtists = () => {
    const [width, setWidth] = useState('');

    // GET CONTEXT VALUE
    const { w, artist } = useContext(AppContext);
    // const { artists } = useContext(AppContext);

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

    // console.log(artist.length);

    return (
        <div className="w-full rounded-xl container mx-auto">
            {/* TITLE */}
            <h1 className="font-semibold text-2xl py-2 pl-8">
                Featured Artworks
            </h1>
            {/* SLIDESHOW */}
            <Slideshow autoplay={false} navigation={true}>
                {artist.length > 1 &&
                    artist.map(({ name, url, nationality, id }) => (
                        // SLIDE GOES HERE
                        <div key={id} className="w-full">
                            <div
                                className="p-8  hover:bg-off-1/0 border-[1px] border-off-1/0 hover:border-[1px] hover:border-off-2 md:hover:bg-off-1 rounded-md"
                                style={{ width: `${width}px` }}
                            >
                                <img
                                    src={url}
                                    onError={(event) =>
                                        (event.target.src =
                                            'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                    }
                                    alt="Artwork"
                                    className="w-full md:h-64 object-cover rounded-md my-4 overflow-hidden opacity-90 hover:opacity-100"
                                />
                                <h1 className="font-semibold text-lg pb-1">
                                    {name}
                                </h1>
                                <div className="flex justify-between flex-wrap">
                                    <p>{nationality}</p>
                                </div>
                            </div>
                        </div>
                        // SLIDE ENDS HERE
                    ))}
            </Slideshow>
        </div>
    );
};

export default SliderShowArtists;
