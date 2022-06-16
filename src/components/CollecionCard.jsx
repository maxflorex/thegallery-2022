import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/appContext';

const CollecionCard = (props) => {
    const [filtered, setFiltered] = useState([]);
    const { art } = useContext(AppContext);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        setFiltered(art.filter((col) => col.collection === props.col));
    }, [art.length > 0]);

    useEffect(() => {
        const getRandomItem = (arr) => {
            const randomIndex = Math.floor(Math.random() * arr.length);
            const item = arr[randomIndex];
            return item;
        };

        if (filtered.length > 0) {
            let l = getRandomItem(filtered);
            setRandom(l);
        }
    }, [filtered.length > 0, art]);

    return (
        <div>
            <div className="relative">
                <img
                    src={random.url}
                    alt="Collection picture"
                    className="w-full object-cover h-64 rounded-md relative overflow-hidden opacity-70 hover:opacity-100"
                />
                <div className="flex w-full h-full justify-center items-end gap-2 bg-gradient-to-t from-black/40 rounded-md absolute bottom-0 left-0 p-4">
                    <h1 className="text-white text-lg  lg:text-xl font-light drop-shadow-lg tracking-wide italic">
                        {props.col}
                    </h1>
                    <p className="px-2 bg-white/60 backdrop-blur-md rounded-lg mr-auto text-navy-500 text-sm md:text-normal">
                        {filtered?.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CollecionCard;
