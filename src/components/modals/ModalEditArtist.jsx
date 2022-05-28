import React from 'react';

const ModalEditArtist = ({ setShowEdit }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('closeM')) {
            setShowEdit(false);
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };
    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-off-2/90 z-50 closeM top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1>Hello there!</h1>
            </div>
        </div>
    );
};

export default ModalEditArtist;
