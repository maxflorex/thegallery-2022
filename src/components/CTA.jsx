import React from 'react';
import bg from '../assets/bg-2-01.svg';
import rough from '../assets/rough-line.svg';
import rough2 from '../assets/rough-line-01.svg';
import { buttontw2 } from '../style/styles';
import SocialMediaFloating from './SocialMediaFloating';

const CTA = () => {
    return (
        <div className="relative pt-32">
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="bg-cover h-[40rem]"
            >
                <div className="container mx-auto flex flex-col p-8 h-full justify-center pb-16">
                    <h1 className="xl:w-1/3 md:w-1/2 w-2/3 text-4xl italic leading-relaxed pb-4">
                        Get free personalized advice from our expert art
                        advisors, 24/7
                    </h1>
                    <button className={`${buttontw2} + 'bg-navy-500'`}>
                        Get in touch
                    </button>
                </div>
            </div>
            {/* DEVIDER */}
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

            <div className="flex flex-col h-full justify-center items-center absolute top-8 right-8">
                <SocialMediaFloating />
            </div>
        </div>
    );
};

export default CTA;
