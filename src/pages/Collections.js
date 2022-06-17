import React from 'react'
import { Link } from 'react-router-dom';
import CollecionCard from '../components/CollecionCard';
import UseFirestore from '../hooks/useFirestore';

const Collections = () => {
    const [...collection] = UseFirestore('collections');
    return (
        <>
            <div className="flex justify-center items-center w-full h-full flex-1">
                <div className="w-full flex flex-col justify-center items-center gap-4 p-8">
                    <h1 className="text-left text-4xl font-thin w-full container pt-40 pb-12 px-8">
                        Browse All Collections
                    </h1>
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-16 container mx-auto">
                        {collection &&
                            collection.map((data, i) => (
                                <Link
                                    key={i}
                                    className="odd:col-span-2 last:row-span-2 hover:scale-105"
                                    to={`/collections/${data.title
                                        .toLowerCase()
                                        .replace(/[^A-Z0-9]/gi, '')}`}
                                >
                                    <CollecionCard col={data.title} />
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-center pb-24">
                <Link
                    to="/"
                    className="py-2 px-4 rounded-xl bg-off-1 text-xs hover:scale-110 hover:bg-off-2 my-8"
                >
                    Go home
                </Link>
                <Link
                    to="/art"
                    className="py-2 px-4 rounded-xl bg-blue-200 text-xs hover:scale-110 hover:bg-blue-500 my-8"
                >
                    View Artworks
                </Link>
            </div>
        </>
    )
}

export default Collections