import React from 'react';

const ModalExpandImage = ({ data, setClicked }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setClicked('');
        }
        // SHOW SCROLLBAR
        document.body.style.overflow = 'auto';
        document.body.style.height = 'auto';
    };

    // SHOW SPECIFIC NUMBER OF ITEMS FROM ARRAY
    const tags = data.tag.slice(0, 4);

    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-off-2/90 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                    src={data.url}
                    onError={(event) =>
                        (event.target.src =
                            'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                    }
                    alt="Artwork enlarged"
                    className="max-h-[70vh] rounded-md max-w-[90vw] drop-shadow-sm"
                />
                <div className="flex flex-col justify-between items-start py-4 flex-wrap gap-1">
                    <p className="text-md">{data.title}</p>
                    <h1 className="text-xl font-semibold">{data.title}</h1>
                </div>
                <hr className="mb-4 bg-off-2 text-off-3" />
                <div className="flex justify-between flex-wrap gap-4">
                    <p className="text-xs italic">
                        Medium: {data.medium}
                    </p>
                    <div className="flex gap-4 flex-wrap items-center justify-center">
                        {data.tag && tags.map((data, index) => (
                            <p
                                key={index}
                                className="capitalize py-1 px-2 rounded-3xl bg-off-1 text-xs"
                            >
                                {data}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <span
                className="fixed top-8 right-8 px-4 py-2 bg-off-1 rounded-full font-semibold hover:bg-pink-500 cursor-pointer dismiss duration-700 transition-all"
                onClick={ModalExpandImage}
            >
                Close
            </span>
        </div>
    );
};

export default ModalExpandImage;
