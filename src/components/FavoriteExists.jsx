import React, { useState } from 'react';
import { FiX, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useRemoveFavorite from '../hooks/useRemoveFavorite';

const FavoriteExists = ({ art }) => {
    const [show, setShow] = useState('');
    const [HandleCart] = useCart();
    const [handleRemoveFavorite] = useRemoveFavorite();

    return (
        <div className="flex justify-center items-center w-full h-full flex-1">
            <div className="w-full flex flex-col justify-center items-center gap-4 p-8">
                <h1 className="text-left text-4xl font-thin w-full container pt-40 pb-12 px-8">
                    Your Favorite Artworks
                </h1>
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
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
                                <div className="flex items-end absolute bottom-6 right-6 h-full gap-2">
                                    <FiX
                                        className="p-2 bg-navy-500 hover:bg-pink-500 rounded-full w-6 h-6 stroke-white"
                                        onClick={() =>
                                            handleRemoveFavorite(data)
                                        }
                                    />
                                    <FiShoppingCart
                                        className="p-2 bg-navy-500 hover:bg-blue-500 rounded-full w-6 h-6 stroke-white"
                                        onClick={() => HandleCart([data])}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex gap-4 items-center justify-center">
                    <Link
                        to="/"
                        className="py-2 px-4 rounded-xl bg-off-1 text-xs hover:scale-110 hover:bg-off-2 my-8"
                    >
                        Go home
                    </Link>
                    <Link
                        to="/cart"
                        className="py-2 px-4 rounded-xl bg-blue-200 text-xs hover:scale-110 hover:bg-blue-500 my-8"
                    >
                        Go to cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FavoriteExists;
