import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tg-logo-white.svg';

const Footer = () => {
    return (
        <footer className="w-full bg-[#000000]/80 p-8 sticky top-full">
            <div className="flex justify-between h-80 items-center text-off-1 container mx-auto">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-40" />
                </Link>
                <h1 className="text-center text-white">By Art Cayman Co.</h1>
            </div>
        </footer>
    );
};

export default Footer;
