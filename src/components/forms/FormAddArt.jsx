import React, { useState } from 'react';
import { inputtw3 } from '../../style/styles';
import uploadIcon from '../../assets/upload.svg';

const FormAddArt = ({ setArt, art, reset, handleSubmit }) => {
    
    const { title, width, height, medium, price, tags, collection } = art;

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
                <input
                    type="text"
                    className={inputtw3}
                    value={medium}
                    onChange={(e) => setArt({ ...art, medium: e.target.value })}
                    placeholder="Enter Medium..."
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
            <input
                type="text"
                className={inputtw3}
                value={collection}
                onChange={(e) => setArt({ ...art, collection: e.target.value })}
                placeholder="Enter Tags"
            />
            <input
                type="text"
                data-role="taginput"
                data-tag-trigger="Space"
                className={inputtw3}
                value={tags}
                onChange={(e) => setArt({ ...art, tags: e.target.value })}
                placeholder="Select Collection"
            />
            <select name="" id="">
                <option value="">Available</option>
                <option value="">Sold</option>
            </select>
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
