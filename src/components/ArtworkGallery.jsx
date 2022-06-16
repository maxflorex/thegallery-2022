import React, { useContext, useState } from 'react';
import { AppContext } from '../context/appContext';
import ModalExpandImage from './../components/modals/ModalExpandImage';

const ArtworkGallery = () => {
    const { art } = useContext(AppContext);
    const [clickedItem, setClickedItem] = useState('');
    // const [showDetails, setShowDetails] = useState(false);

    const handleClick = (data) => {
        setClickedItem(data);
        // HIDE SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-8 m-8 py-16">
                    {art.length > 0 &&
                        art.slice(0, 6).map((data, index) => (
                            <div
                                key={index}
                                className="flex flex-col p-4 md:p-8 border-[1px] border-off-2 hover:border-off-5 rounded-lg cursor-pointer hover:bg-off-1 overflow-hidden"
                                onClick={() => handleClick(data)}
                            >
                                <img
                                    src={data.url}
                                    onError={(event) =>
                                        (event.target.src =
                                            'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                    }
                                    alt="Artwork"
                                    className="w-full h-80 object-cover rounded-md overflow-hidden opacity-50 hover:opacity-100"
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
        </div>
    );
};

export default ArtworkGallery;
