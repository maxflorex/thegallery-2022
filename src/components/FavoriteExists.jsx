import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import {buttontw} from '../style/styles'

const FavoriteExists = ({ art }) => {
    const [show, setShow] = useState('');

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-full flex flex-col justify-center items-center gap-4 bg-blue-200 p-8">
                <h1 className="text-left text-4xl font-semibold w-full container pt-40 pb-16 underline underline-offset-8 italic">
                    Your Favorite Artworks
                </h1>
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 pb-40">
                    {art?.favorites?.map((data, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-off-1 rounded-lg hover:scale-105 cursor-pointer relative"
                            onMouseEnter={() => setShow(i)}
                            onMouseLeave={() => setShow('')}
                        >
                            <div className="flex md:flex-col gap-1 items-start md:justify-center justify-between">
                                <div className="">
                                    <h1 className="text-sm capitalize break-words">
                                        {data.title?.toLowerCase()}
                                    </h1>
                                    <p className="text-xs italic">
                                        {data.medium}
                                    </p>
                                </div>
                                <img
                                    src={data.by.url}
                                    alt="By"
                                    className="w-8 h-8 rounded-md mt-2 object-cover"
                                />
                            </div>
                            <img
                                src={data.url}
                                alt="Artwork"
                                className="w-full h-32 rounded-lg object-cover col-span-2"
                            />
                            {show === i && (
                                <div className="flex items-center absolute top-0 right-0 h-full">
                                    <FiX className="p-2 bg-blue-500 rounded-full w-8 h-8" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <button className={buttontw}>Go to cart</button>
            </div>
        </div>
    );
};

export default FavoriteExists;
