import React, { useState } from 'react';
import Arrows from '../Arrows';
import ModalEditArtist from './ModalEditArtist';

const ModalShowArtistsDetails = ({
    data,
    setArtistClicked,
    handleRight,
    handleLeft,
}) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setArtistClicked('');
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    // SHOW SPECIFIC NUMBER OF ITEMS FROM ARRAY
    const tags = data.tag?.slice(0, 4);

    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-off-2/90 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[40rem]">
                <div className="flex mx-auto">
                    <img
                        src={data.url}
                        onError={(event) =>
                            (event.target.src =
                                'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                        }
                        alt="Artwork enlarged"
                        className="max-h-80 object-contain rounded-lg drop-shadow-sm"
                    />
                </div>
                <div className="flex flex-col justify-between items-start py-4 flex-wrap gap-1">
                    <div className="flex gap-4">
                        {data.flag && (
                            <img
                                src={`https://flagcdn.com/${data.flag?.toLowerCase()}.svg`}
                                alt="flag"
                                className="w-6 object-contain"
                            />
                        )}
                        <p className="text-sm">{data.nationality}</p>
                    </div>
                    <h1 className="text-2xl font-semibold capitalize">
                        {data.name?.toLowerCase()}
                    </h1>
                </div>
                <hr className="mb-4 bg-off-2 text-off-3" />
                <div className="flex justify-between flex-wrap gap-4">
                    <p className="text-xs text-justify leading-6 max-h-80 overflow-y-auto">
                        {data.bio}
                    </p>
                    <div className="flex gap-4 flex-wrap items-center justify-center">
                        {tags?.map((data, index) => (
                            <p
                                key={index}
                                className="capitalize py-1 px-2 rounded-3xl bg-blue-300/50 text-xs"
                            >
                                {data}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <span
                className="fixed top-8 right-8 px-4 py-2 bg-off-1 rounded-full font-semibold hover:bg-pink-500 cursor-pointer dismiss duration-700 transition-all"
                onClick={handleClick}
            >
                Close
            </span>
            <spanF
                className="fixed top-8 left-8 px-4 py-2 bg-off-1 rounded-full font-semibold hover:bg-pink-500 cursor-pointer duration-700 transition-all"
                onClick={() => setShowEdit(true)}
            >
                Edit Artist
            </spanF>
            <Arrows right={handleRight} left={handleLeft} />
            {showEdit && <ModalEditArtist setShowEdit={setShowEdit} data={data} />}
        </div>
    );
};

export default ModalShowArtistsDetails;
