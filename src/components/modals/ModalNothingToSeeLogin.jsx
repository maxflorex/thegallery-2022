import React from 'react';

const ModalNothingToSeeLogin = () => {
    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-off-2/40 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative bg-white p-16 rounded-lg">Nothing to see here</div>
            </div>
        </div>
    );
};

export default ModalNothingToSeeLogin;
