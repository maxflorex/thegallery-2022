import React from 'react';

const Arrows = ({ right, left }) => {

    const buttonS = 'bg-white hover:bg-cream-500 p-2 rounded-xl cursor-pointer';
    
    return (
        <div className="absolute gap-4 bottom-8 flex w-screen items-center justify-center">
            <span onClick={left} className={buttonS}>
                Previous
            </span>
            <span onClick={right} className={buttonS}>
                Next
            </span>
        </div>
    );
};

export default Arrows;
