import React from 'react';
import { Link } from 'react-router-dom';

const CartDoesNotExist = () => {
    return (
        <div className="w-full flex flex-1">
            <div className="flex flex-col justify-center items-center w-full my-40">
                <h1 className="text-lg">Your cart is empty 🥲</h1>
                <p className="text-sm italic">Add more items</p>
                <div className="flex gap-4 items-center justify-center">
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
                        Add Artworks
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartDoesNotExist;
