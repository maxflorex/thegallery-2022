import { doc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { colRefArt } from '../../firebase/config';
import { inputtw3 } from '../../style/styles';
import InputCollection from './InputCollections';
import InputMedium from './InputMedium';
import InputTags from './InputTags';

const FormUpdateArt = ({ setShowEdit, data }) => {
    const [show, setShow] = useState(false);
    const [showAvailable, setShowAvailable] = useState(false);
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [clicked, setClicked] = useState({
        urlClick: false,
        wideClick: false,
        titleClick: false,
        tagClick: false,
        priceClick: false,
        mediumClick: false,
        heightClick: false,
        collectionClick: false,
        availableClick: false,
    });

    const [art, setArt] = useState({
        url: '',
        wide: '',
        title: '',
        tag: '',
        price: '',
        medium: '',
        height: '',
        collection: '',
        available: true,
    });

    const {
        urlClick,
        wideClick,
        titleClick,
        tagClick,
        priceClick,
        mediumClick,
        heightClick,
        collectionClick,
        availableClick,
    } = clicked;

    const {
        url,
        wide,
        title,
        tag,
        price,
        medium,
        height,
        collection,
        available,
    } = art;

    useEffect(() => {
        if (data) {
            setTags(data?.tag);
        }
    }, [data]);

    console.log(tags);

    // CLOSE MODAL
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setShowEdit(false);
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    // UPDATE DOCUMENTS
    const updateArt = async (id) => {
        await updateDoc(doc(colRefArt, id), {
            title: `${title ? title : data.title}`,
            collection: `${collection ? collection : data.collection}`,
            height: `${height ? height : data.height}`,
            medium: `${medium ? medium : data.medium}`,
            price: `${price ? price : data.price}`,
            tag: tags,
            wide: `${wide ? wide : data.wide}`,
            available: available,
        })
            .then((e) => {
                alert('Updated!');
                reset(e);
                setShowEdit(false);
                setTags([]);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    // RESET
    const reset = () => {
        setArt({
            url: '',
            wide: '',
            title: '',
            tag: '',
            price: '',
            medium: '',
            height: '',
            collection: '',
            available: true,
        });
        setClicked({
            urlClick: false,
            wideClick: false,
            titleClick: false,
            tagClick: false,
            priceClick: false,
            mediumClick: false,
            heightClick: false,
            collectionClick: false,
            availableClick: false,
        });
        setTags([]);
    };

    useEffect(() => {
        if (data?.tag > 0) {
            setTags([data.tag]);
        } else {
            setTags([])
        }
    }, [data]);

    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-blue-100/90 z-50 dismiss top-0 left-0 scroll backdrop-blur-sm dismiss"
            onClick={(e) => handleClick(e)}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] bg-white p-16 rounded-lg drop-shadow-md max-h-[90vh] overflow-y-auto scroll">
                <h1 className="text-3xl font-medium pb-8 text-center">
                    Update Artist
                </h1>

                {/* NAME */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({ ...clicked, titleClick: !titleClick })
                        }
                    >
                        Artist
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.title.toLowerCase()}
                    </h1>
                </div>
                {titleClick && (
                    <input
                        type="text"
                        className={inputtw3}
                        value={title}
                        onChange={(e) =>
                            setArt({ ...art, title: e.target.value })
                        }
                        placeholder={data.title}
                    />
                )}

                {/* WIDTH */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({ ...clicked, wideClick: !wideClick })
                        }
                    >
                        Width
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.wide}
                    </h1>
                </div>
                {wideClick && (
                    <input
                        type="number"
                        className={inputtw3}
                        value={wide}
                        onChange={(e) =>
                            setArt({ ...art, wide: e.target.value })
                        }
                        placeholder={data.wide}
                    />
                )}

                {/* HEIGHT */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({
                                ...clicked,
                                heightClick: !heightClick,
                            })
                        }
                    >
                        Height
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.height}
                    </h1>
                </div>
                {heightClick && (
                    <input
                        type="number"
                        className={inputtw3}
                        value={height}
                        onChange={(e) =>
                            setArt({ ...art, height: e.target.value })
                        }
                        placeholder={data.height}
                    />
                )}
                {/* COLLECTION */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({
                                ...clicked,
                                collectionClick: !collectionClick,
                            })
                        }
                    >
                        Collection
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.collection}
                    </h1>
                </div>
                {collectionClick && (
                    <InputCollection
                        setArt={setArt}
                        art={art}
                        show={show}
                        setShow={setShow}
                    />
                )}
                {/* MEDIUM */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({
                                ...clicked,
                                mediumClick: !mediumClick,
                            })
                        }
                    >
                        Medium
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.medium}
                    </h1>
                </div>
                {mediumClick && (
                    <InputMedium
                        setArt={setArt}
                        art={art}
                        show={show}
                        setShow={setShow}
                    />
                )}
                {/* AVAILABLE */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({
                                ...clicked,
                                availableClick: !availableClick,
                            })
                        }
                    >
                        Available
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.available ? 'Available' : 'Sold'}
                    </h1>
                </div>
                {availableClick && (
                    <span
                        className="w-40 bg-off-2 p-2 rounded-lg relative text-center cursor-pointer"
                        onClick={() => setShowAvailable(!showAvailable)}
                    >
                        {available || available === 'true'
                            ? 'Available'
                            : !available
                            ? 'Sold'
                            : 'Select option'}
                        {showAvailable && (
                            <ul className="flex gap-4 flex-col absolute mt-4 left-0 w-full items-center bg-cream-100 rounded-lg py-4">
                                <li
                                    onClick={() =>
                                        setArt({
                                            ...art,
                                            available: true,
                                        })
                                    }
                                >
                                    Available
                                </li>
                                <li
                                    onClick={() =>
                                        setArt({ ...art, available: false })
                                    }
                                >
                                    Sold
                                </li>
                            </ul>
                        )}
                    </span>
                )}
                {/* PRICE */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({
                                ...clicked,
                                priceClick: !priceClick,
                            })
                        }
                    >
                        Price
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.price}
                    </h1>
                </div>
                {priceClick && (
                    <input
                        type="number"
                        className={inputtw3}
                        value={price}
                        onChange={(e) =>
                            setArt({ ...art, price: e.target.value })
                        }
                        placeholder={data.price}
                    />
                )}
                {/* TAGS */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({
                                ...clicked,
                                tagClick: !tagClick,
                            })
                        }
                    >
                        Tags
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data?.tag?.length}
                    </h1>
                </div>
                {tagClick && (
                    <InputTags
                        setArtist={setArt}
                        artist={art}
                        tags={tags}
                        setTags={setTags}
                        input={input}
                        setInput={setInput}
                        show={show}
                        setShow={setShow}
                        data={data}
                    />
                )}
                <div className="flex flex-col gap-4 mt-8">
                    <button
                        className="w-full py-3 px-4 bg-navy-500 rounded-lg text-white active:scale-95 dismiss"
                        onClick={() => updateArt(data.id)}
                    >
                        Update Artist
                    </button>
                    {/* )} */}
                    <button
                        className="w-full py-3 px-4 rounded-lg hover:bg-pink-500 bg-off-3/40 active:scale-95"
                        onClick={(e) => reset(e)}
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormUpdateArt;
