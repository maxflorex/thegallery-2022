import { useState } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { UseFirestoreMoreArt } from '../hooks/useFirestore';
import { buttontw, buttontw2 } from '../style/styles';
import ArtInquery from './forms/ArtInquery';

const ArtFullDetails = ({ art }) => {
    const [showForm, setShowForm] = useState(false);
    const { by, title, medium, height, wide, price, url } = art;

    const [...moreByArtist] = UseFirestoreMoreArt(by);

    return (
        <>
            {title && (
                <div>
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-[50vw] py-16 md:py-40 flex items-center justify-evenly bg-off-1 h-scree">
                            <img
                                src={url}
                                alt="Artwork"
                                className=" max-w-full object-contain rounded-xl max-h-[70vh] px-8 py-24 md:py-4"
                            />
                        </div>
                        <div className="md:w-1/2 w-full h-full flex flex-col items-start md:justify-center justify-start p-16 gap-4 my-auto	">
                            <p>
                                <span className="text-xs italic">Medium:</span>{' '}
                                {medium}
                            </p>
                            <h1 className="text-4xl font-thin capitalize">
                                {title.toLowerCase()}
                            </h1>
                            <div className="flex items-center justify-center gap-4 my-auto">
                                <h1 className="italic text-sm capitalize">
                                    by : {by.name.toLowerCase()}
                                </h1>
                                <img
                                    src={by.url}
                                    alt="artist"
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                            </div>

                            {/* TABLE STARTS */}
                            <table className="table-auto border-[1px] border-off-1 my-8">
                                <thead>
                                    <tr className="text-left bg-off-1">
                                        <th className=" font-normal text-xs p-2 italic">
                                            Width
                                        </th>
                                        <th className=" font-normal text-xs p-2 italic">
                                            Height
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2">{wide}</td>
                                        <td className="p-2">{height}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* TABLE ENDS */}
                            <h2 className="text-2xl mb-8 font-semibold">
                                ${price}
                            </h2>
                            <button className="py-2 px-4 bg-off-1 rounded-md hover:bg-blue-200" onClick={() => setShowForm(true)}>
                                Acquire this artwork
                            </button>
                            <div className="flex gap-4 items-center p-2 mt-4">
                                <FiHeart className="hover:scale-125 cursor-pointer hover:fill-pink-500" />
                                <FiShoppingCart className="hover:scale-125 cursor-pointer hover:fill-pink-500" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="bg-cream-100 py-16">
                <div className="flex flex-col justify-center items-center h-full w-full">
                    <h1 className="text-2xl font-light">
                        More Artworks by Artist
                    </h1>
                    <div className="grid grid-cols-4 gap-4 mdgap-8 my-16 container mx-auto w-full">
                        {moreByArtist &&
                            moreByArtist.slice(0, 4).map((data, i) => (
                                <Link
                                    key={i}
                                    to={`/art/${data.id}`}
                                    className="flex flex-col gap-4 border-[1px] border-cream-300 w-full md:p-4 p-2 rounded-md hover:scale-105 hover:bg-white"
                                >
                                    <img
                                        src={data.url}
                                        alt="Artwork"
                                        className="h-24 object-cover rounded-md w-full grayscale hover:grayscale-0 opacity-40 hover:opacity-100"
                                    />
                                    <div className="flex justify-between flex-wrap items-center gap-2">
                                        <h1 className="capitalize text-sm">
                                            {data.title.toLowerCase()}
                                        </h1>
                                        <p className="text-xs italic">
                                            {data.height + ' x ' + data.wide}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
            {by && (
                <div className="bg-white py-16 w-full">
                    <div className="container p-4 mx-auto grid md:grid-cols-3 grid-cols-2 gap-8">
                        <div className="w-full col-span-2 flex gap-8 items-center">
                            <img
                                src={by.url}
                                alt="Artist"
                                className="h-80 rounded-md p-3 bg-off-1 max-w-1/2"
                            />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-light italic">
                                    Meet the artist
                                </h1>
                                <p className="capitalize text-4xl font-thin">
                                    {by.name.toLowerCase()}
                                </p>
                                <button className="bg-cream-500 px-3 py-2 text-sm hover:scale-110 rounded-lg mr-auto mt-4">
                                    See More
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-off-1 rounded-lg flex flex-col items-center justify-center col-span-2 md:col-span-1 p-8">
                            <p className="italic">
                                Looking for something specific?
                            </p>
                            <h1 className="text-4xl font-thin">
                                Get a comission piece
                            </h1>
                            <button className="bg-white px-3 py-2 text-sm hover:scale-110 rounded-lg mt-4">
                                Contact Artist
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showForm && <ArtInquery />}
        </>
    );
};

export default ArtFullDetails;
