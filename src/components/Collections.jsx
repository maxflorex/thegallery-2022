import React, { useEffect, useState } from 'react';
import { FiPlay } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import UseFirestore from '../hooks/useFirestore';
import CollecionCard from './CollecionCard';

const Collections = () => {
    const [...collection] = UseFirestore('collections');
    const [random, setRandom] = useState([]);

    const navigate = useNavigate();

    const handleNavigate = (data) => {
        navigate(
            `/collections/${data.title
                .toLowerCase()
                .replace(/[^A-Z0-9]/gi, '')}`
        );
    };

    // RANDOMIZE FILTERED DATA
    useEffect(() => {
        const shuffle = (aToShuffle) => {
            for (let i = aToShuffle.length - 1; i > 0; i--) {
                let randomPosition = Math.floor(Math.random() * (i + 1));
                let temp = aToShuffle[i];
                // SWAP ELEMENTS
                aToShuffle[i] = aToShuffle[randomPosition];
                aToShuffle[randomPosition] = temp;
            }
            return aToShuffle;
        };
        setRandom(shuffle(collection));
    }, [collection.length > 0]);

    return (
        <div className="bg-off-1 mt-32">
            <div className="container mx-auto p-8">
                <div className="flex w-full justify-between items-center group pt-24 pb-14">
                    <h1 className="text-3xl font-light capitalize">
                        Browse by collections
                    </h1>
                    <Link
                        to="/collections"
                        className="flex gap-2 items-center px-4 py-2 bg-white rounded-md hover:bg-cream-500"
                    >
                        <h1 className="text-sm text-navy-500">
                            See All Collections
                        </h1>
                        <FiPlay className="text-off-3 group-hover:text-white" />
                    </Link>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-16 pb-20">
                    {random &&
                        random.slice(0, 8).map((data, i) => (
                            <span
                                key={i}
                                className="even:col-span-2 last:row-span-2 hover:scale-105 cursor-pointer"
                                onClick={() => handleNavigate(data)}
                            >
                                <CollecionCard col={data.title} />
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Collections;
