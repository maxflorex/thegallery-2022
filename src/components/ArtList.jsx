import React, { useContext, useState } from 'react';
import { AppContext } from '../context/appContext';
import ModalShowArtDetail from './modals/ModalShowArtDetail';

const ArtList = () => {
    const { art } = useContext(AppContext);
    const [artClicked, setArtClicked] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (data, index) => {
        setArtClicked(data);
        setCurrentIndex(index);
        // HIDE SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    const dataLength = art.length;

    // ROTATION - R
    const handleRight = () => {
        if (currentIndex + 1 >= dataLength) {
            setCurrentIndex(0);
            setArtClicked(art[0]);
        }
        const indexedData = art.filter((item) => {
            return art.indexOf(item) === currentIndex + 1;
        });
        if (currentIndex + 1 < dataLength) {
            setCurrentIndex(currentIndex + 1);
            setArtClicked(indexedData[0]);
        }
    };

    // ROTATION - L
    const handleLeft = () => {
        const dataLength = art.length;
        if (currentIndex === 0) {
            setCurrentIndex(dataLength - 1);
            setArtClicked(art[dataLength - 1]);
        }
        const indexedData = art.filter((item) => {
            return art.indexOf(item) === currentIndex - 1;
        });
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setArtClicked(indexedData[0]);
        }
    };

    return (
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {art &&
                art.map((data, index) => (
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-off-1 rounded-lg"
                        key={index}
                        onClick={() => handleClick(data, index)}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl">{data.title}</h1>
                            <p className="text-xs italic">By: {data.by.name}</p>
                        </div>
                        <img
                            src={data.url}
                            alt="Artwork"
                            className="w-full h-32 rounded-lg object-cover col-span-2"
                        />
                    </div>
                ))}
            {artClicked && (
                <ModalShowArtDetail
                    setArtClicked={setArtClicked}
                    artClicked={artClicked}
                    handleLeft={handleLeft}
                    handleRight={handleRight}
                />
            )}
        </div>
    );
};

export default ArtList;
