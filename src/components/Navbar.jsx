import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = useSelector((state) => state.user.user);

    return (
        <nav className="bg-blue-500 p-8">
            <div className="flex gap-4 justify-between items-center h-16">
                <div className="flex gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/artworks">Artworks</Link>
                    <Link to="/about">About</Link>
                </div>
                {user !== null ? (
                    <div className='flex items-center gap-4'>
                        <Link to="/dashboard">Dashboard</Link>
                        <div className="flex gap-4 items-center p-2 rounded-lg hover:bg-cream-500 cursor-pointer">
                            <h1>Hello, {user.displayName}</h1>
                            <img
                                src={user.photoUrl}
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
