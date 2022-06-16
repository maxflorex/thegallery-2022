import React from 'react';
import bg from '../assets/bg-2-01.svg';
import rough from '../assets/rough-line.svg';
import rough2 from '../assets/rough-line-01.svg';
import { buttontw2 } from '../style/styles';
import SocialMediaFloating from './SocialMediaFloating';
import pic from '../assets/undraw_3d_modeling_re_6vi2 (1).svg';

const CTA = () => {
    return (
        <div className="relative pt-16">
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className="bg-cover h-[32rem] bg-fixed "
            >
                <div className="flex gap-4 items-center h-full justify-center container mx-auto">
                    <img src={pic} alt="Illustration" className="h-56" />
                    <div className="container mx-auto flex flex-col p-8 h-full justify-center">
                        <p className="xl:w-1/3 md:w-1/2 w-2/3 text-4xl italic leading-relaxed pb-4">
                            Get free personalized advice from our expert art
                            advisors, 24/7
                        </p>
                        <button className={`${buttontw2} + 'bg-navy-500'`}>
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full justify-center items-center absolute top-8 right-8">
                <SocialMediaFloating />
            </div>
        </div>
    );
};

export default CTA;
