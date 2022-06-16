import { produceWithPatches } from 'immer';
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

    const getRandomItem = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    };

    useEffect(() => {
        if (filtered.length > 0) {
            let l = getRandomItem(filtered);
            setRandom(l);
        }
    }, [filtered.length]);

    return (
        <div
            className={`w-full bg-cover h-64 rounded-md relative overflow-hidden}`}
            style={{ backgroundImage: `url(${random.url})` }}
        >
            <div className="flex w-full h-full justify-center items-center gap-4 relative bg-5 bg-gradient-to-t from-black/50 rounded-md bg-blend-multiply">
                <div className="absolute bottom-6 left-6 gap-2 flex flex-col">
                    <h1 className="text-white text-2xl font-normal drop-shadow-lg tracking-wide">
                        {props.col}
                    </h1>
                    <p className="py1- px-2 bg-off-1/50 backdrop-blur-md rounded-xl">
                        {filtered?.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CollecionCard;
