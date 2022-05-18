import React from 'react';
import bg from '../assets/bg-01.svg';
import { buttontw, inputtw } from '../style/styles';
import rough from '../assets/rough-line.svg';
import rough2 from '../assets/rough-line-01.svg';

const Hero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="h-[40rem] bg-center bg-cover w-full"
        >
            <div className="flex flex-col md:gap-8 gap-4 justify-center w-full items-center h-full flex-wrap relative overflow-hidden">
                <h1 className="text-4xl md:text-6xl font-semibold text-cream-100 drop-shadow-sm">
                    The Gallery at The Ritz-Carlton
                </h1>
                <p className="text-cream-300 text-lg">
                    Seven Mile Beach, Cayman Islands
                </p>
                <div className="flex gap-4">
                    <input
                        type="text"
                        className={inputtw}
                        placeholder="Search artwork..."
                    />
                    <div>
                        <button className={buttontw}>Search</button>
                    </div>
                </div>
                <img
                    src={rough}
                    alt="line"
                    className="absolute bottom-0 w-full hidden md:block"
                />
                <img
                    src={rough2}
                    alt="line"
                    className="absolute bottom-0 w-full md:hidden block"
                />
            </div>
        </div>
    );
};

export default Hero;
