import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import useFavorite from '../hooks/useFavorite';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const ArtCard = ({ art }) => {
    const [showName, setShowName] = useState(false);
    const [showBy, setShowBy] = useState('');
    const [HandleFavorite] = useFavorite();
    const [HandleCart] = useCart();

    const navigate = useNavigate();

    const handleNavigate = (e) => {
        if (e.target.classList.contains('dismiss')) {
            navigate(`/art/${art.id}`);
        }
    };

    return (
        <div
            onMouseEnter={() => setShowBy(art.title)}
            onMouseLeave={() => setShowBy('')}
        >
            <span className="relative">
                <img
                    src={art.url}
                    alt="Collection"
                    className="w-full object-cover h-full rounded-md relative overflow-hidden opacity-70 hover:opacity-100"
                />
                <div
                    className="flex flex-col w-full h-full justify-end items-end bg-gradient-to-t from-black/50 absolute bottom-0 left-0 p-4 rounded-md dismiss cursor-pointer"
                    onClick={(e) => handleNavigate(e)}
                >
                    <p className="text-xs text-white">{art.medium}</p>
                    <h1 className="text-white text-sm  lg:text-lg font-light drop-shadow-lg tracking-wide italic capitalize">
                        {art.title?.toLowerCase()}
                    </h1>
                    <p className="text-xs text-white">
                        {art.wide + 'w' + ' x ' + art.height + 'h'}
                    </p>
                </div>
                {showBy === art.title && (
                    <>
                        <div className="w-full-h-full absolute top-4 left-4">
                            <Link
                                to={`/artist/${art?.by?.name
                                    ?.toLowerCase()
                                    .replace(/ /g, '-')}`}
                                className="relative"
                            >
                                <img
                                    src={art.by.url}
                                    alt="Artist"
                                    className="w-8 h-8 rounded-full grayscale opacity-60 object-cover  hover:opacity-100"
                                    onMouseEnter={() => setShowName(true)}
                                    onMouseLeave={() => setShowName(false)}
                                />
                                {showName && (
                                    <p
                                        className="capitalize bg-white py-1 px-2 rounded-xl absolute top-2 left-10 text-xs italic"
                                        onMouseEnter={() => setShowName(true)}
                                        onMouseLeave={() => setShowName(false)}
                                    >
                                        {art?.by?.name?.toLowerCase()}
                                    </p>
                                )}
                            </Link>
                        </div>
                        <div className="flex gap-4 absolute items-center justify-center top-4 right-4 bg-white rounded-full py-2 px-4 z-40">
                            <FiHeart
                                className="hover:scale-125 cursor-pointer hover:fill-pink-500"
                                onClick={() => HandleFavorite(art)}
                            />
                            <FiShoppingCart
                                className="hover:scale-125 cursor-pointer hover:fill-pink-500"
                                onClick={() => HandleCart(art)}
                            />
                        </div>
                    </>
                )}
            </span>
        </div>
    );
};

export default ArtCard;
