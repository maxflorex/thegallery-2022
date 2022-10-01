import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/appContext';
import Slideshow from './Slideshow';

const SliderArtists = () => {
    const [width, setWidth] = useState('');
    const [show, setShow] = useState('');

    // GET CONTEXT VALUE
    const { w, artist } = useContext(AppContext);

    // CHANGE SLIDE WIDTH WITH SCREEN CHANGE
    useEffect(() => {
        if (w >= 1280) {
            setWidth(w / 8);
        } else if (w > 650) {
            setWidth(w / 4);
        } else if (w < 650) {
            setWidth(w / 3);
        }
    }, [w]);

    const sb = process.env.REACT_APP_STORAGE_BUCKET;

    return (
        <div className="bg-blue-100 py-40">
            <div className="w-full rounded-xl container mx-auto">
                {/* TITLE */}
                <div className="flex justify-between items-center w-full px-8">
                    <div className="flex items-end gap-4">
                        <h1 className="text-2xl md:text-3xl font-light capitalize">
                            Local Artists
                        </h1>
                        <div className="hidden md:flex gap-4 items-center">
                            {/* <TbClick className="text-off-5 -mr-2" /> */}
                            <p className="text-sm italic text-navy-200">
                                Click the arrows to see more artists
                            </p>
                        </div>
                    </div>
                    <Link
                        to="/artist"
                        className="flex gap-2 items-center px-4 py-2 bg-white rounded-md hover:bg-cream-500"
                    >
                        <h1 className="text-sm text-navy-500">
                            See All Artists
                        </h1>
                    </Link>
                </div>
                {/* SLIDESHOW */}
                <Slideshow autoplay={false} navigation={true}>
                    {artist.length > 1 &&
                        artist.map((data, index) => {
                            const link = data.url.replace(
                                `https://firebasestorage.googleapis.com/v0/b/${sb}/`,
                                ''
                            );

                            // SLIDE GOES HERE
                            return (
                                <Link
                                    to={`/artist/${data.name
                                        .replace(/ /g, '-')
                                        .toLowerCase()}`}
                                    key={index}
                                    className="w-full group"
                                    onMouseEnter={() => setShow(index)}
                                    onMouseLeave={() => setShow('')}
                                >
                                    <div
                                        className="px-4 xl:px-8 py-8   hover:bg-off-1/0 border-[1px] border-off-1/0 hover:border-[1px] hover:border-off-2 md:hover:bg-off-1 rounded-md flex flex-col items-center justify-center relative"
                                        style={{ width: `${width}px` }}
                                    >
                                        <img
                                            src={`https://ik.imagekit.io/acc/tr:w-200/${link}`}
                                            onError={(event) =>
                                                (event.target.src =
                                                    'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                            }
                                            alt="Artwork"
                                            className="w-24 h-24 object-cover rounded-full my-4 overflow-hidden group-hover:opacity-90 grayscale opacity-60"
                                        />
                                        {show === index && (
                                            <div className="w-full h-full flex items-end justify-center absolute -top-2 right-0">
                                                <h1 className="text-xs pb-1 capitalize text-center">
                                                    {data?.name?.toLowerCase()}
                                                </h1>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            );
                            // SLIDE ENDS HERE
                        })}
                </Slideshow>
            </div>
        </div>
    );
};

export default SliderArtists;
