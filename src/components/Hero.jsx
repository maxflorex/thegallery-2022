import React from 'react';
import logo from '../assets/tg-logo-navy.svg';

const Hero = () => {
    return (
        <div className="w-full bg-off-1 h-[70vh]">
            <div className="flex justify-center w-full items-center h-full">
                <img src={logo} alt="Logo" className="w-80" />
            </div>
        </div>
    );
};

export default Hero;
