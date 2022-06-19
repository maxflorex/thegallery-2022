import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const WelcomeUser = () => {
    const user = useSelector((state) => state.user.user);

    return (
        <div>
            <div className="container mx-auto flex flex-col items-center justify-center py-16 gap-4">
                <h1 className="text-4xl font-thin text-center">
                    Welcome to The Gallery
                </h1>
                {user && user?.email !== 'prints@artcaymanco.com' && (
                    <h1>Explore the best of local art in the Cayman Islands</h1>
                )}
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
                    Artworks
                </Link>
                <Link
                    to="/collections"
                    className="py-2 px-4 rounded-xl bg-blue-200 text-xs hover:scale-110 hover:bg-blue-500 my-8"
                >
                   Collections
                </Link>
            </div>
        </div>
    );
};

export default WelcomeUser;
