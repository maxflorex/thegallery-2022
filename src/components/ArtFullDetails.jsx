import { OtherArtworkByArtist } from './OtherArtworkByArtist';
import { useEffect, useRef, useState } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { UseFirestoreMoreArt } from '../hooks/useFirestore';
import ArtistCta from './ArtistCta';
import ArtInquery from './forms/ArtInquery';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appContext';
import useFavorite from '../hooks/useFavorite';
import useCart from '../hooks/useCart';

const ArtFullDetails = ({ art, id }) => {
    const [showForm, setShowForm] = useState(false);
    const { by, title, medium, height, wide, price, url } = art;
    const topPage = useRef(null);
    const [...moreByArtist] = UseFirestoreMoreArt(by);
    const [HandleFavorite] = useFavorite();
    const [HandleCart] = useCart();

    // FUNCTION - SCROLL TO TOP
    const scrollToBottom = () => {
        topPage.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // USEEFFECT - SCROLL TO TOP
    useEffect(() => {
        scrollToBottom();
    }, [url, id]);

    const handleClick = () => {
        setShowForm(true);
        // HIDE SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    return (
        <div className='snap-y snap-mandatory'>
            {title && (
                <div ref={topPage} className='snap-center'>
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-[50vw] py-16 md:py-40 flex items-center justify-evenly bg-off-1 lg:h-screen h-auto">
                            <div className="py-24 md:py-4 px-8">
                                <img
                                    src={url}
                                    alt="Artwork"
                                    className="max-w-full object-contain rounded-lg max-h-[70vh]"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full h-full flex flex-col items-start md:justify-center justify-start p-16 gap-4 my-auto	">
                            <p>
                                <span className="text-xs italic">Medium:</span>{' '}
                                {medium}
                            </p>
                            <h1 className="text-4xl capitalize">
                                {title?.toLowerCase()}
                            </h1>
                            <Link
                                to={`/artist/${by.name
                                    .replace(/ /g, '-')
                                    .toLowerCase()}`}
                            >
                                <div className="flex items-center justify-center gap-4 my-auto">
                                    <h1 className="italic text-sm capitalize">
                                        by : {by?.name?.toLowerCase()}
                                    </h1>
                                    <img
                                        src={by.url}
                                        alt="artist"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                </div>
                            </Link>

                            {/* TABLE STARTS */}
                            <table className="table-auto border-[1px] border-off-1 my-8">
                                <thead>
                                    <tr className="text-left bg-off-1">
                                        <th className=" font-normal text-xs p-2 italic">
                                            Width
                                        </th>
                                        <th className=" font-normal text-xs p-2 italic">
                                            Height
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2">{wide}</td>
                                        <td className="p-2">{height}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* TABLE ENDS */}
                            <h2 className="text-2xl mb-8 font-semibold">
                                ${price}
                            </h2>
                            <button
                                className="py-2 px-4 bg-off-1 rounded-md hover:bg-blue-200"
                                onClick={() => handleClick()}
                            >
                                Acquire this artwork
                            </button>
                            <div className="flex gap-4 items-center p-2 mt-4">
                                <FiHeart className="hover:scale-125 cursor-pointer hover:fill-pink-500" onClick={() => HandleFavorite(art, id)} />
                                <FiShoppingCart className="hover:scale-125 cursor-pointer hover:fill-blue-500" onClick={() => HandleCart(art, id)} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <ArtistCta by={by} moreByArtist={moreByArtist} />
            <OtherArtworkByArtist moreByArtist={moreByArtist}  />
            {showForm && <ArtInquery setShowForm={setShowForm} art={art} />}
        </div>
    );
};

export default ArtFullDetails;
