import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import ModalExpandImage from './../components/modals/ModalExpandImage';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TbClick } from 'react-icons/tb';

const ArtworkGallery = () => {
    const { art } = useContext(AppContext);
    const [clickedItem, setClickedItem] = useState('');
    const [random, setRandom] = useState([]);

    const handleClick = (data) => {
        setClickedItem(data);
        // HIDE SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    useEffect(() => {
        const shuffle = (aToShuffle) => {
            for (let i = aToShuffle.length - 1; i > 0; i--) {
                let randomPosition = Math.floor(Math.random() * (i + 1));
                let temp = aToShuffle[i];
                // SWAP ELEMENTS
                aToShuffle[i] = aToShuffle[randomPosition];
                aToShuffle[randomPosition] = temp;
            }
            return aToShuffle;
        };
        setRandom(shuffle(art));
    }, [art?.length]);

    return (
        <div className="relative overflow-hidden p-8 mt-32 mb-24">
            <div className="flex w-full justify-between items-center group container mx-auto">
                <div className="flex items-end gap-4">
                    <h1 className="text-3xl font-light capitalize">
                        Artworks On Display
                    </h1>
                    <div className="flex gap-4 items-center">
                        <TbClick className="text-off-5 -mr-2" />
                        <p className="text-sm italic text-off-5">
                            Click to expand the image
                        </p>
                    </div>
                </div>
                <Link
                    to="/art"
                    className="flex gap-2 items-center px-4 py-2 bg-off-1 rounded-md hover:bg-cream-500"
                >
                    <h1 className="text-sm text-navy-500">
                        See All Artworks
                    </h1>
                    <FiPlay className="text-off-3 group-hover:text-white" />
                </Link>
            </div>
            <div className="grid xl:grid-cols-6 grid-cols-2 gap-8 flex-wrap overflow-hidden py-12 justify-center container mx-auto">
                {random.length > 0 &&
                    random.slice(0, 5).map((data, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-2 md:p-4 border-[1px] border-off-2 hover:border-off-3 rounded-lg cursor-pointer hover:bg-off-2 overflow-hidden first:col-span-2 first:bg-off-1"
                            onClick={() => handleClick(data)}
                        >
                            <img
                                src={data.url}
                                onError={(event) =>
                                    (event.target.src =
                                        'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                }
                                alt="Artwork"
                                className="w-auto h-56 object-cover overflow-hidden opacity-70 hover:opacity-100"
                            />
                        </div>
                    ))}
                {clickedItem && (
                    <ModalExpandImage
                        setClicked={setClickedItem}
                        data={clickedItem}
                    />
                )}
            </div>
        </div>
    );
};

export default ArtworkGallery;
