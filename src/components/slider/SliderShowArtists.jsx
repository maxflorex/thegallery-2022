import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import ModalShowArtistsDetails from '../modals/ModalShowArtistsDetails';
import Slideshow from './Slideshow2';

const SliderShowArtists = () => {
    const [width, setWidth] = useState('');
    const [artistClicked, setArtistClicked] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // GET CONTEXT VALUE
    const { w, artist } = useContext(AppContext);

    // CHANGE SLIDE WIDTH WITH SCREEN CHANGE
    useEffect(() => {
        if (w >= 1280) {
            setWidth(w / 6);
        } else if (w > 650) {
            setWidth(w / 4);
        } else if (w < 650) {
            setWidth(w / 2);
        }
    }, [w]);

    // OPEN ARTISTS
    const handleClick = (data, index) => {
        setArtistClicked(data);
        setCurrentIndex(index);
        // HIDE SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    const dataLength = artist.length;

    // ROTATION - R
    const handleRight = () => {
        if (currentIndex + 1 >= dataLength) {
            setCurrentIndex(0);
            setArtistClicked(artist[0]);
        }
        const indexedData = artist.filter((item) => {
            return artist.indexOf(item) === currentIndex + 1;
        });
        if (currentIndex + 1 < dataLength) {
            setCurrentIndex(currentIndex + 1);
            setArtistClicked(indexedData[0]);
        }
    };

    // ROTATION - L
    const handleLeft = () => {
        const dataLength = artist.length;
        if (currentIndex === 0) {
            setCurrentIndex(dataLength - 1);
            setArtistClicked(artist[dataLength - 1]);
        }
        const indexedData = artist.filter((item) => {
            return artist.indexOf(item) === currentIndex - 1;
        });
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setArtistClicked(indexedData[0]);
        }
    };

    return (
        <div className="w-full rounded-xl container mx-auto py-16 px-16">
            {/* SLIDESHOW */}
            <Slideshow autoplay={false} navigation={true}>
                {artist.length > 1 &&
                    artist.map((data, index) => (
                        // SLIDE GOES HERE
                        <div
                            key={index}
                            className="w-full"
                            onClick={() => handleClick(data, index)}
                        >
                            <div
                                className="p-4 md:p-8  hover:bg-off-1/0 border-[1px] border-off-1/0 hover:border-[1px] hover:border-off-2 md:hover:bg-off-1 rounded-md"
                                style={{ width: `${width}px` }}
                            >
                                <img
                                    src={data.url}
                                    onError={(event) =>
                                        (event.target.src =
                                            'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                    }
                                    alt="Artwork"
                                    className="w-full h-64  object-cover rounded-md my-4 overflow-hidden opacity-90 hover:opacity-100"
                                />
                                <h1 className="font-semibold text-lg pb-1 capitalize">
                                    {data.name.toLowerCase()}
                                </h1>
                                <div className="flex justify-between flex-wrap">
                                    <p>{data.nationality}</p>
                                </div>
                            </div>
                        </div>
                        // SLIDE ENDS HERE
                    ))}
            </Slideshow>
            {artistClicked && (
                <ModalShowArtistsDetails
                    data={artistClicked}
                    setArtistClicked={setArtistClicked}
                    handleRight={handleRight}
                    handleLeft={handleLeft}
                />
            )}
        </div>
    );
};

export default SliderShowArtists;
