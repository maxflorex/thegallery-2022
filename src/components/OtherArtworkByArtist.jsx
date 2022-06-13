import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import useFavorite from '../hooks/useFavorite';
import useCart from '../hooks/useCart';
import { useState } from 'react';

export const OtherArtworkByArtist = ({ moreByArtist }) => {
    const [HandleFavorite] = useFavorite();
    const [HandleCart] = useCart();
    const [show, setShow] = useState('');

    return (
        <div className="flex flex-col justify-center items-center h-full w-full py-16 px-8 snap-center bg-blue-200">
            <h1 className="text-2xl font-light pb-8">
                More Artworks by Artist
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 container mx-auto w-full">
                {moreByArtist?.length > 0 &&
                    moreByArtist?.slice(0, 4).map((data, i) => (
                        <Link
                            key={i}
                            to={`/art/${data.id}`}
                            className="group flex flex-col gap-4 border-[1px] border-blue-300 w-full md:p-4 p-2 rounded-md group-hover:scale-105 hover:bg-white"
                        >
                            <div
                                className="flex flex-col w-full relative"
                                onMouseEnter={() => setShow(i)}
                                onMouseLeave={() => setShow('')}
                            >
                                <img
                                    src={data.url}
                                    alt="Artwork"
                                    className="h-24 object-cover rounded-md w-full grayscale group-hover:grayscale-0 opacity-30 group-hover:opacity-100"
                                />
                                {show === i && (
                                    <div className="flex gap-4 absolute items-center justify-center bottom-4 right-4 bg-white rounded-full py-2 px-4">
                                        <FiHeart
                                            className="hover:scale-125 cursor-pointer hover:fill-pink-500"
                                            onClick={() =>
                                                HandleFavorite(data, data.id)
                                            }
                                        />
                                        <FiShoppingCart
                                            className="hover:scale-125 cursor-pointer hover:fill-pink-500"
                                            onClick={() =>
                                                HandleCart(data, data.id)
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between flex-wrap items-center gap-2">
                                <h1 className="capitalize text-sm">
                                    {data?.title?.toLowerCase()}
                                </h1>
                                <p className="text-xs italic">
                                    {data.height + ' x ' + data.wide}
                                </p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};
