import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import useCart from '../../hooks/useCart';
import useFavorite from '../../hooks/useFavorite';

const ModalExpandImage = ({ data, setClicked }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setClicked('');
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    // SHOW SPECIFIC NUMBER OF ITEMS FROM ARRAY
    const tags = data?.tag?.slice(0, 4);

    const [HandleFavorite] = useFavorite();
    const [HandleCart] = useCart();

    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-white/90 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
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
                    className="max-h-[70vh] rounded-md max-w-[80vw] drop-shadow-sm"
                />
                <div className="flex flex-col justify-between items-start py-4 flex-wrap gap-1 capitalize">
                    <p className="text-md">{data.by.name.toLowerCase()}</p>
                    <h1 className="text-xl font-semibold">
                        {data.title.toLowerCase()}
                    </h1>
                </div>
                <hr className="mb-4 bg-off-2 text-off-3" />
                <div className="flex justify-between flex-wrap gap-4">
                    <p className="text-xs italic">Medium: {data.medium}</p>
                    <div className="flex gap-4 flex-wrap items-center justify-center">
                        {data?.tag?.length > 0 &&
                            tags.map((data, index) => (
                                <p
                                    key={index}
                                    className="capitalize py-1 px-2 rounded-3xl bg-off-1 text-xs"
                                >
                                    {data}
                                </p>
                            ))}
                    </div>
                </div>
                <div className="flex gap-4 items-center p-2 mt-4">
                    <FiHeart
                        className="hover:scale-125 cursor-pointer hover:fill-pink-500"
                        onClick={() => HandleFavorite(data)}
                    />
                    <FiShoppingCart
                        className="hover:scale-125 cursor-pointer hover:fill-blue-500"
                        onClick={() => HandleCart([data])}
                    />
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
