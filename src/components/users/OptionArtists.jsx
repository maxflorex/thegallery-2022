import React, { useState } from 'react';
import a from '../../assets/art.svg';
import b from '../../assets/book.svg';
import p from '../../assets/user.svg';

const buttontw4 =
    'flex justify-between p-4 bg-off-1 rounded-lg w-80 hover:bg-off-3 active:scale-90 cursor-pointer focus:bg-cream-500';

const OptionsArtists = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div className="text-xl font-bold w-full">
            <div className="flex items-center flex-wrap justify-center gap-4">
                <div
                    className={`flex justify-between p-4 rounded-lg w-80 active:scale-90 cursor-pointer ${
                        selected === 1 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => setSelected(1)}
                >
                    <h1>My Artworks</h1>
                    <img src={a} alt="Hearth" className="w-8" />
                </div>
                <div
                    className={`flex justify-between p-4 rounded-lg w-80 active:scale-90 cursor-pointer ${
                        selected === 2 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => setSelected(2)}
                >
                    <h1>My Collections</h1>
                    <img src={b} alt="Basket" className="w-8" />
                </div>
                <div
                    className={`flex justify-between p-4 rounded-lg w-80 active:scale-90 cursor-pointer ${
                        selected === 3 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => setSelected(3)}
                >
                    <h1>Profile</h1>
                    <img src={p} alt="User" />
                </div>
            </div>
        </div>
    );
};

export default OptionsArtists;
