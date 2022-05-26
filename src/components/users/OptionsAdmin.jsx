import React, { useEffect, useState } from 'react';
import paint from '../../assets/paint.svg';
import n from '../../assets/notes.svg';
import p from '../../assets/user.svg';

const OptionsAdmin = ({ selected, setSelected }) => {
    const handleClick = (n) => {
        setSelected(n);
    };

    return (
        <div className="text-xl font-bold w-full">
            <div className="flex items-center flex-wrap justify-center gap-4">
                <div
                    className={`flex justify-between p-4 rounded-lg w-80 active:scale-90 cursor-pointer ${
                        selected === 1 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => handleClick(1)}
                >
                    <h1>View Artists</h1>
                    <img src={p} alt="Artists" className="w-8" />
                </div>
                <div
                    className={`flex justify-between p-4 rounded-lg w-80 active:scale-90 cursor-pointer ${
                        selected === 2 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => handleClick(2)}
                >
                    <h1>View Artwortks</h1>
                    <img src={paint} alt="Basket" className="w-8" />
                </div>
                <div
                    className={`flex justify-between p-4 rounded-lg w-80 active:scale-90 cursor-pointer ${
                        selected === 3 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => handleClick(3)}
                >
                    <h1>Inventory</h1>
                    <img src={n} alt="User" />
                </div>
            </div>
        </div>
    );
};

export default OptionsAdmin;
