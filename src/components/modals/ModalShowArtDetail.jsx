import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Arrows from '../Arrows';
import FormUpdateArt from '../forms/FormUpdateArt';
import ModalDeleteArt from './ModalDeleteArt';

const ModalShowArtDetail = ({
    setArtClicked,
    artClicked,
    setView,
    setCurrentIndex,
    currentIndex,
    art,
}) => {
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setArtClicked('');
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    const {
        title,
        url,
        collection,
        height,
        wide,
        price,
        by,
        available,
        medium,
        id,
        tag,
    } = artClicked;

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

    const navigate = useNavigate();

    const HandleNavigation = () => {
        navigate(`/art/${id}`);
        // SHOW SCROLLBAR
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
    };

    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-off-2/90 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full bg-white p-8 rounded-xl">
                <img
                    src={url}
                    alt=""
                    className="max-h-[60vh] max-w-[80vw] object-contain rounded-md bg-white"
                />
                <span
                    className="flex justify-between items-center cursor-pointer"
                    onClick={HandleNavigation}
                >
                    <h1 className="text-2xl font-semibold mt-4 capitalize">
                        {title.toLowerCase()}
                    </h1>
                    <p className="text-xs italic capitalize">
                        By: {by.name.toLowerCase()}
                    </p>
                </span>
                <div className="flex gap-4 justify-between text-xs items-center">
                    <p className="flex items-center gap-2 text-sm">{medium}</p>
                    <p
                        className={`${
                            available ? 'bg-cream-200' : 'bg-pink-200'
                        } p-2 rounded-lg`}
                    >
                        {available ? 'Available' : 'Sold'}
                    </p>
                </div>
                <div className="flex gap-2 text-sm items-center">
                    {height + ' x ' + wide}
                </div>
                <div className="flex gap-4 justify-between items-center">
                    <p className="flex gap-2 text-xs items-center mt-4">
                        Collection:{' '}
                        <span className="p-2 bg-navy-100 rounded-lg">
                            {collection}
                        </span>
                    </p>
                    <p className="text-lg font-semibold">${price}</p>
                </div>
                <ul className="flex gap-4">
                    {tag > 0 &&
                        tag.map((data, i) => (
                            <li
                                key={i}
                                className="p-1 bg-off-1 rounded-full text-xs"
                            >
                                {data}
                            </li>
                        ))}
                </ul>
            </div>
            <span
                className="fixed top-8 right-8 px-2 py-1 text-sm bg-off-1 rounded-full font-semibold hover:bg-pink-500 cursor-pointer dismiss duration-700 transition-all"
                onClick={(e) => handleClick(e)}
            >
                Close
            </span>
            <div className="flex gap-4 fixed top-8 left-8 ">
                <span
                    className="px-2 py-1 text-sm  bg-pink-200 rounded-full font-semibold hover:bg-pink-500 cursor-pointer duration-700 transition-all"
                    onClick={() => setShowDelete(true)}
                >
                    Delete Artist
                </span>
                <span
                    className="px-2 py-1 text-sm  bg-blue-200 rounded-full font-semibold hover:bg-blue-500 cursor-pointer duration-700 transition-all"
                    onClick={() => setShowEdit(true)}
                >
                    Edit Artist
                </span>
            </div>
            <Arrows right={handleRight} left={handleLeft} />
            {showDelete && (
                <ModalDeleteArt
                    id={id}
                    setShowDelete={setShowDelete}
                    setArtClicked={setArtClicked}
                    setView={setView}
                />
            )}
            {showEdit && (
                <FormUpdateArt data={artClicked} setShowEdit={setShowEdit} />
            )}
        </div>
    );
};

export default ModalShowArtDetail;
