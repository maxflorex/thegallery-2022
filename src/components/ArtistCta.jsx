import { InputSeacrhArtByArtist } from '../components/forms/InputSeacrhArtByArtist';
import React, { useState } from 'react';
import { inputtw } from '../style/styles';
import { Link } from 'react-router-dom';
import bg from '../assets/bg-2-01.svg';
import ModalComissions from './modals/ModalComissions';

const ArtistCta = ({ by, moreByArtist }) => {
    const [showC, setShowC] = useState(false);

    return (
        <div className="bg-cream-100 py-24 snap-center">
            {by && (
                <div className="container p-4 mx-auto grid md:grid-cols-3 grid-cols-2 gap-16 md:gap-8 relative">
                    {/* COL 1 */}
                    <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center col-span-3 lg:col-span-1">
                        <Link
                            to={`/artist/${by.name
                                .replace(/ /g, '-')
                                .toLowerCase()}`}
                        >
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
                            <a
                                href={`/artist/${by.name
                                    .replace(/ /g, '-')
                                    .toLowerCase()}`}
                                className="bg-cream-500 px-3 py-2 text-sm hover:scale-110 rounded-lg lg:mr-auto mr-0 mt-4"
                            >
                                See More
                            </a>
                        </div>
                    </div>

                    {/* COL 2 */}
                    <InputSeacrhArtByArtist by={by} artist={moreByArtist} />
                    {/* COL 3 */}
                    <div
                        className="bg-white rounded-lg flex flex-col items-center justify-center col-span-3 lg:col-span-1 p-8 shadow-sm mx-8 py-24 bg-cover text-white hover:scale-105"
                        style={{ backgroundImage: `url(${bg})` }}
                    >
                        <p className="italic">
                            Looking for something specific?
                        </p>
                        <h1 className="text-4xl font-thin">
                            Get a commission piece
                        </h1>
                        <button
                            className="bg-white px-3 py-2 text-sm hover:scale-110 rounded-lg mt-4 text-black"
                            onClick={() => setShowC(true)}
                        >
                            Contact Artist
                        </button>
                    </div>
                </div>
            )}
            {showC && <ModalComissions setShowC={setShowC} by={by} />}
        </div>
    );
};

export default ArtistCta;
