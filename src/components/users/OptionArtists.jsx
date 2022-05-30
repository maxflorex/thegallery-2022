import React, { useState } from 'react';
import a from '../../assets/art.svg';
import b from '../../assets/book.svg';
import p from '../../assets/user.svg';

const buttontw4 =
    'flex justify-between p-4 bg-off-1 rounded-lg w-80 hover:bg-off-3 active:scale-90 cursor-pointer focus:bg-cream-500';

const OptionsArtists = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div className="xl:text-xl text-md font-semibold w-full xl:w-72 xl:h-screen p-4 flex items-center xl:fixed top-0 xl:bg-off-1/90 z-40 container mx-auto">
            <div className="xl:flex items-center xl:flex-wrap justify-center gap-4 w-full grid grid-cols-3">
                <div
                    className={`flex justify-between xl:w-80 w-auto items-center  p-4 rounded-lg active:scale-90 cursor-pointer ${
                        selected === 1 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => setSelected(1)}
                >
                    <h1>My Artworks</h1>
                    <img src={a} alt="Hearth" className="xl:w-8 md:w-6 w-4" />
                </div>
                <div
                    className={`flex justify-between xl:w-80 w-auto items-center  p-4 rounded-lg active:scale-90 cursor-pointer ${
                        selected === 2 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => setSelected(2)}
                >
                    <h1>My Collections</h1>
                    <img src={b} alt="Basket" className="xl:w-8 md:w-6 w-4" />
                </div>
                <div
                    className={`flex justify-between xl:w-80 w-auto items-center  p-4 rounded-lg active:scale-90 cursor-pointer ${
                        selected === 3 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => setSelected(3)}
                >
                    <h1>Profile</h1>
                    <img src={p} alt="User" className="xl:w-8 md:w-6 w-4" />
                </div>
            </div>
        </div>
    );
};

export default OptionsArtists;
