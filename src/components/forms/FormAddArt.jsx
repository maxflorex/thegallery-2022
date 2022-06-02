import React, { useEffect, useRef, useState } from 'react';
import { inputtw3 } from '../../style/styles';
import uploadIcon from '../../assets/upload.svg';
import InputTags from './InputTags';
import InputMedium from './InputMedium';
import InputCollections from './InputCollections';

const FormAddArt = ({
    setArt,
    art,
    reset,
    handleSubmit,
    setShow,
    show,
    tags,
    setTags,
    showAvailable, setShowAvailable
}) => {
    const [input, setInput] = useState('');
    const { title, width, height, price, available } = art;


    return (
        <div className="flex-col flex justify-between gap-8 py-16">
            <input
                type="text"
                className={inputtw3}
                value={title}
                onChange={(e) => setArt({ ...art, title: e.target.value })}
                placeholder="Artwork Title..."
            />
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="number"
                    className={inputtw3}
                    value={width}
                    onChange={(e) => setArt({ ...art, width: e.target.value })}
                    placeholder="Width..."
                />
                <input
                    type="number"
                    className={inputtw3}
                    value={height}
                    onChange={(e) => setArt({ ...art, height: e.target.value })}
                    placeholder="Height..."
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <InputMedium
                    show={show}
                    setShow={setShow}
                    setArt={setArt}
                    art={art}
                />
                <input
                    type="number"
                    min="0.00"
                    max="100000.00"
                    className={inputtw3}
                    value={price}
                    onChange={(e) => setArt({ ...art, price: e.target.value })}
                    placeholder="Enter Price..."
                />
            </div>
            <InputCollections
                show={show}
                setShow={setShow}
                setArt={setArt}
                art={art}
            />
            <InputTags
                setArtist={setArt}
                artist={art}
                tags={tags}
                setTags={setTags}
                input={input}
                setInput={setInput}
                show={show}
                setShow={setShow}
            />

            <span
                className="w-40 bg-off-2 p-2 rounded-lg relative text-center cursor-pointer"
                onClick={() => setShowAvailable(!showAvailable)}
            >
                {available === '' ? 'Select Availability' : available}
                {showAvailable && (
                    <ul className="flex gap-4 flex-col absolute mt-4 left-0 w-full items-center bg-cream-100 rounded-lg py-4">
                        <li
                            onClick={() =>
                                setArt({ ...art, available: true })
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
            <div className="flex flex-col gap-2 items-center justify-between pb-4">
                <label htmlFor="files" className="">
                    <img
                        src={uploadIcon}
                        alt="Upload"
                        className="w-16 p-2 rounded-lg cursor-pointer object-cover hover:scale-105 opacity-50 hover:opacity-100"
                    />
                </label>
                <input
                    type="file"
                    id="files"
                    className="hidden"
                    placeholder="Update your name..."
                />
                <h2>Upload Extra Pictures</h2>
            </div>
            <div className="flex gap-4">
                <button
                    className="w-full py-3 px-4 bg-navy-500 rounded-lg text-white active:scale-95"
                    onClick={handleSubmit}
                >
                    Add Artwork
                </button>
                <button
                    className="w-full rounded-lg hover:bg-pink-500 bg-off-3 active:scale-95"
                    onClick={reset}
                >
                    Clear Form
                </button>
            </div>
        </div>
    );
};

export default FormAddArt;
