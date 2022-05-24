import React from 'react';
import { buttontw2, inputtw2, inputtw3 } from '../../style/styles';
import upload from '../../assets/upload.svg';
const bg = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png';

const EditArtwork = () => {
    return (
        <div className="container mx-auto py-16">
            <div className="flex flex-nowrap flex-col py-24 h-full bg-off-1">
                <h1 className="text-4xl font-semibold text-center pb-8">
                    Add a new artwork
                </h1>
                <form className=" flex-col flex justify-between mx-auto gap-8 py-16">
                    <h1 className="text-2xl font-thin text-center pb-4 italic">
                        Upload your artwork
                    </h1>
                    <div className="flex flex-col gap-4 items-center justify-between pb-4">
                        <label htmlFor="upload-picture" className="">
                            <img
                                src={bg}
                                alt="Upload"
                                className="w-56 h-96 p-4 rounded-lg cursor-pointer object-cover hover:scale-105"
                            />
                        </label>
                        <input
                            type="file"
                            id="upload-picture"
                            className="hidden"
                            placeholder="Update your name..."
                        />
                        <h2>Profile Picture</h2>
                    </div>
                    <input
                        type="text"
                        className={inputtw3}
                        placeholder="Artwork Title..."
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            className={inputtw3}
                            placeholder="Width..."
                        />
                        <input
                            type="text"
                            className={inputtw3}
                            placeholder="Height..."
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            className={inputtw3}
                            placeholder="Enter Medium..."
                        />
                        <input
                            type="text"
                            className={inputtw3}
                            placeholder="Enter Price..."
                        />
                    </div>
                    <input type="text" data-role="taginput" data-tag-trigger="Space" className={inputtw3} placeholder='Enter tags' />
                    <div className="flex flex-col gap-2 items-center justify-between pb-4">
                        <label htmlFor="upload-picture" className="">
                            <img
                                src={upload}
                                alt="Upload"
                                className="w-24 p-4 rounded-lg cursor-pointer object-cover hover:scale-105 opacity-50 hover:opacity-100"
                            />
                        </label>
                        <input
                            type="file"
                            id="upload-picture"
                            className="hidden"
                            placeholder="Update your name..."
                        />
                        <h2>Upload Extra Pictures</h2>
                    </div>
                    <div className="flex gap-4">
                      <button className={buttontw2}>Add Artwork</button>
                      <button className={buttontw2}>Clear Form</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditArtwork;
