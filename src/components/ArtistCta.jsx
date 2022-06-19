import { InputSeacrhArtByArtist } from '../components/forms/InputSeacrhArtByArtist';
import React, { useState } from 'react';
import { inputtw } from '../style/styles';
import { Link } from 'react-router-dom';
import bg from '../assets/bg-2-01.svg';
import ModalComissions from './modals/ModalComissions';

const ArtistCta = ({ by, moreByArtist }) => {
    const [showC, setShowC] = useState(false);

    return (
        <div className="bg-cream-100 py-40 snap-center">
            {by && (
                <div className="grid lg:grid-cols-4 container p-4 mx-auto gap-8">
                    <section className="flex gap-8 relative col-span-2 lg:col-span-1 w-full">
                        <div className="w-full flex flex-col gap-2 items-center justify-center">
                            <h1 className="text-sm font-light italic">
                                Meet the artist
                            </h1>
                            <Link
                                to={`/artist/${by.name
                                    .replace(/ /g, '-')
                                    .toLowerCase()}`}
                            >
                                <p className="capitalize text-2xl font-light">
                                    {by.name.toLowerCase()}
                                </p>
                            </Link>
                            <div className="p-2 relative">
                                <img
                                    src={by.url}
                                    alt="Artist"
                                    className="h-56 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 rounded-md"
                                />
                                <Link
                                    to={`/artist/${by.name
                                        .replace(/ /g, '-')
                                        .toLowerCase()}`}
                                    className="bg-cream-500 px-3 py-2 text-sm hover:scale-110 rounded-lg absolute bottom-6 right-6"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    </section>
                    <div
                        className="bg-white rounded-lg flex flex-col items-center justify-center shadow-sm mx-8 bg-cover text-white col-span-2 "
                        style={{ backgroundImage: `url(${bg})` }}
                    >
                        <InputSeacrhArtByArtist by={by} artist={moreByArtist} />
                    </div>
                    <div className="bg-cream-300 rounded-lg hidden lg:flex gap-2 flex-col items-center justify-center p-8 shadow-sm mx-8 bg-cover text-white">
                        <p className="italic text-black text-sm">
                            Looking for something specific?
                        </p>
                        <h1 className="text-2xl font-thin text-black text-center">
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
