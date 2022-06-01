import React, { useState } from 'react';
import Arrows from '../Arrows';
import FormUpdateArt from '../forms/FormUpdateArt';
import ModalDeleteArt from './ModalDeleteArt';

const ModalShowArtDetail = ({
    setArtClicked,
    artClicked,
    handleRight,
    handleLeft,
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

    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-off-2/90 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[40rem]">
                <img
                    src={url}
                    alt=""
                    className="max-h-96 object-cover rounded-md"
                />
                <h1 className="text-2xl">{title}</h1>
                <div className="flex gap-2 text-sm">
                    {height + ' x ' + wide}
                </div>
                <div className="flex gap-4 justify-between text-xs">
                    <p>Medium: {medium}</p>
                    <p>Collection: {collection}</p>
                </div>
                <div className="flex gap-4 justify-between text-xs">
                    <p>{available}</p>
                    <p>${price}</p>
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
                <div className="flex gap-4 items-center mt-8">
                    <p className="capitalize italic">
                        By: {by.name.toLowerCase()}
                    </p>
                    <img
                        src={by.url}
                        alt="Artwork"
                        className="w-8 h-8 object-cover rounded-full"
                    />
                </div>
            </div>
            <span
                className="fixed top-8 right-8 px-4 py-2 bg-off-1 rounded-full font-semibold hover:bg-pink-500 cursor-pointer dismiss duration-700 transition-all"
                onClick={(e) => handleClick(e)}
            >
                Close
            </span>
            <div className="flex gap-4 fixed top-8 left-8 ">
                <span
                    className="px-4 py-2 bg-pink-200 rounded-full font-semibold hover:bg-pink-500 cursor-pointer duration-700 transition-all"
                    onClick={() => setShowDelete(true)}
                >
                    Delete Artist
                </span>
                <span
                    className="px-4 py-2 bg-blue-200 rounded-full font-semibold hover:bg-blue-500 cursor-pointer duration-700 transition-all"
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
                />
            )}
            {showEdit && (
                <FormUpdateArt data={artClicked} setShowEdit={setShowEdit} />
            )}
        </div>
    );
};

export default ModalShowArtDetail;
