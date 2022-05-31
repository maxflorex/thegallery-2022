import React from 'react';

const ModalShowArtDetail = ({ setArtClicked, artClicked }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setArtClicked('');
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }

        console.log(artClicked);
    };
    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-off-2/90 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[40rem]">
                <div className="flex mx-auto">{artClicked.title}</div>
                <img src={artClicked.url} alt="" className='w-40 h-40 object-cover' />
            </div>
        </div>
    );
};

export default ModalShowArtDetail;
