import React from 'react';
import { inputtw } from '../style/styles';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ArtistCta = ({ by }) => {
    return (
        <div className="bg-cream-100 py-24">
            {by && (
                <div className="container p-4 mx-auto grid lg:grid-cols-3 grid-cols-2 gap-16 md:gap-8relative">
                    {/* COL 1 */}
                    <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center col-span-2 md:col-span-1">
                        <Link to={`/artist/${by.name.replace(/ /g, "-").toLowerCase()}`}>
                            <div className="p-4">

                            <img
                                src={by.url}
                                alt="Artist"
                                className="max-h-80 rounded-lg max-w-1/2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
                                />
                                </div>
                        </Link>
                        <div className="flex flex-col gap-2 items-center lg:items-start">
                            <h1 className="text-xl font-light italic">
                                Meet the artist
                            </h1>
                            <p className="capitalize text-4xl font-light">
                                {by.name.toLowerCase()}
                            </p>
                            <button className="bg-cream-500 px-3 py-2 text-sm hover:scale-110 rounded-lg lg:mr-auto mr-0 mt-4">
                                See More
                            </button>
                        </div>
                    </div>

                    {/* COL 2 */}
                    <div className="w-full flex flex-col items-center justify-center col-span-2 md:col-span-1 p-8 gap-4">
                        <p className="italic">
                            Search more from{' '}
                            <span className="capitalize">
                                {by.name.toLowerCase()}
                            </span>
                        </p>
                        <div className="flex relative items-center">
                            <input
                                type="text"
                                className={inputtw}
                                placeholder="Explore more from this artist"
                            />
                            <FiSearch className="absolute top-0 h-full right-4 hidden lg:block" />
                        </div>
                    </div>
                    {/* COL 3 */}
                    <div className="bg-white rounded-lg flex flex-col items-center justify-center col-span-2 md:col-span-1 p-8 shadow-sm mx-8 py-24">
                        <p className="italic">
                            Looking for something specific?
                        </p>
                        <h1 className="text-4xl font-thin">
                            Get a comission piece
                        </h1>
                        <button className="bg-blue-300 px-3 py-2 text-sm hover:scale-110 rounded-lg mt-4">
                            Contact Artist
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtistCta;
