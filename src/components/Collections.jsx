import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import UseFirestore from '../hooks/useFirestore';
import CollecionCard from './CollecionCard';

const Collections = () => {
    const [...collection] = UseFirestore('collections');

    return (
        <div className="container mx-auto p-8">
            <div className="flex w-full justify-between items-center group">
                <h1 className="text-3xl font-light capitalize">
                    Browse by collections
                </h1>
                <Link
                    to="/art"
                    className="flex gap-2 items-center px-4 py-2 bg-off-1 rounded-md hover:bg-cream-500"
                >
                    <h1 className="text-sm text-navy-500">
                        See All Collections
                    </h1>
                    <FiPlay className="text-off-3 group-hover:text-white" />
                </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 first:bg-blue-500 my-12">
                {collection &&
                    collection.slice(0, 7).map((data, i) => (
                        <Link
                            key={i}
                            className="first:col-span-2 last:row-span-2 hover:scale-105"
                            to={`/collections/${data.title
                                .toLowerCase()
                                .replace(/[^A-Z0-9]/ig, "")
                            }`}
                        >
                            <CollecionCard col={data.title} />
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default Collections;
