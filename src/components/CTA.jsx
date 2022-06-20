import React from 'react';
import pic from '../assets/trcg.jpg';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 container mx-auto mb-24 px-8">
            <img src={pic} alt="The Gallery" className='w-full h-56 md:h-96 object-cover rounded-lg' />
            <div className="flex gap-8 flex-col  h-full my-auto items-start justify-center">
                <h1 className="text-2xl md:text-3xl font-light capitalize">
                    Showcasing local art
                </h1>
                <p className="text-sm md:text-md font-normal leading-loose">
                    The lush landscape, vibrant coast, rich seafaring culture
                    and sheer luminescence of colour and light found within the
                    Cayman Islands landscape has inspired many an artist to put
                    pen, pencil and paintbrush to paper or canvas, creating a
                    fantastic multi-dimensional artistic offering. Luckily,
                    there are some great venues dotted around the island that
                    give artists the opportunity to show off their work to the
                    public.
                </p>
                <Link to='/about' className="py-2 px-4 bg-off-1 rounded-lg mr-auto lg:px-8 hover:bg-blue-500">
                    Know More
                </Link>
            </div>
        </div>
    );
};

export default CTA;
