import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import Slideshow from './Slideshow';
import ModalExpandImage from '../modals/ModalExpandImage';
import { Link } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';
import useCart from '../../hooks/useCart';
import useFavorite from '../../hooks/useFavorite';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

const Slider = () => {
    const { art } = useContext(AppContext);
    const [width, setWidth] = useState('');
    const [clickedItem, setClickedItem] = useState('');
    const [HandleFavorite] = useFavorite();
    const [HandleCart] = useCart();
    const [show, setShow] = useState('');
    const [random, setRandom] = useState({});

    // GET CONTEXT VALUE
    const { w } = useContext(AppContext);

    // CHANGE SLIDE WIDTH WITH SCREEN CHANGE
    useEffect(() => {
        if (w >= 1280) {
            setWidth(w / 6);
        } else if (w > 650) {
            setWidth(w / 4);
        } else if (w < 650) {
            setWidth(w / 2);
        }
    }, [w]);

    // RANDOMIZE FILTERED DATA
    useEffect(() => {
        const shuffle = (aToShuffle) => {
            for (let i = aToShuffle.length - 1; i > 0; i--) {
                let randomPosition = Math.floor(Math.random() * (i + 1));
                let temp = aToShuffle[i];
                // SWAP ELEMENTS
                aToShuffle[i] = aToShuffle[randomPosition];
                aToShuffle[randomPosition] = temp;
            }
            return aToShuffle;
        };
        setRandom(shuffle(art));
    }, [art]);

    return (
        <>
            <div className="w-full rounded-md py-24 container mx-auto">
                <div className="flex w-full justify-between items-center px-8 group">
                    <h1 className="text-3xl font-light">Featured Artworks</h1>
                    <Link
                        to="/art"
                        className="flex gap-2 items-center px-4 py-2 bg-off-1 rounded-md hover:bg-cream-500"
                    >
                        <h1 className="text-sm text-navy-500">See All</h1>
                        <FiPlay className="text-off-3 group-hover:text-white" />
                    </Link>
                </div>
                <Slideshow autoplay={false} navigation={true}>
                    {random?.length > 1 &&
                        art?.map((data, i) => (
                            <div
                                key={i}
                                className="relative"
                                onMouseEnter={() => setShow(i)}
                                onMouseLeave={() => setShow('')}
                            >
                                <Link
                                    className="w-full group"
                                    to={`/art/${data.id}`}
                                >
                                    <div
                                        className="p-8 border-[1px] border-off-1/0 hover:border-[1px] hover:border-off-2 md:hover:bg-off-1 rounded-md"
                                        style={{ width: `${width}px` }}
                                    >
                                        <div className="flex h-64 md:h-40 my-4 overflow-hidden rounded-md">
                                            <img
                                                src={data.url}
                                                onError={(event) =>
                                                    (event.target.src =
                                                        'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                                }
                                                alt="Artwork"
                                                className="object-cover group-hover:scale-105 self-end opacity-80 group-hover:opacity-100 h-full w-full bg-off-3"
                                            />
                                        </div>
                                        <h1 className="font-semibold text-sm pb-1 capitalize">
                                            {data.title.toLowerCase()}
                                        </h1>
                                        <div className="flex justify-between flex-wrap capitalize text-xs">
                                            <p>{data.medium}</p>
                                        </div>
                                    </div>
                                </Link>
                                {/*  */}
                                {show === i && (
                                    <div className="flex gap-4 absolute items-center justify-center bottom-8 right-4 bg-white rounded-full py-2 px-4">
                                        <FiHeart
                                            className="hover:scale-125 cursor-pointer hover:fill-pink-500"
                                            onClick={() => HandleFavorite(data)}
                                        />
                                        <FiShoppingCart
                                            className="hover:scale-125 cursor-pointer hover:fill-pink-500"
                                            onClick={() => HandleCart(data)}
                                        />
                                    </div>
                                )}
                                {/*  */}
                            </div>
                        ))}
                </Slideshow>
            </div>
            {clickedItem && (
                <ModalExpandImage
                    setClicked={setClickedItem}
                    data={clickedItem}
                />
            )}
        </>
    );
};

export default Slider;
