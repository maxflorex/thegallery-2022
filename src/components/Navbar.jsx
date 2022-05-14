import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-8">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/artworks">Artworks</Link>
                <Link to="/about">About</Link>
                <Link to="/account">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
