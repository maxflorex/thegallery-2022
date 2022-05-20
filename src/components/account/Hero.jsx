import React from 'react';
import rough from '../../assets/rough-line.svg';
import rough2 from '../../assets/rough-line-01.svg';

const bg =
    'https://www.americanexpress.com/en-us/travel/discover/photos/924/3252/1200/The%20Ritz-CarltonGrand%20Cayman.jpg';

const Hero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="h-[40rem] bg-center bg-cover w-full relative"
        >
            <div className=" w-full h-full flex-wrap relative overflow-hidden">
                <div className="h-full w-full bg-navy-500/90 backdrop-blur-sm flex flex-col md:gap-8 gap-4 justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-semibold text-cream-100 drop-shadow-sm">
                        The Gallery at The Ritz-Carlton
                    </h1>
                </div>
                {/* DIVIDERS */}
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
