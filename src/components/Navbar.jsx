import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-typo-line-01.svg';
import ModalMenu from './modals/ModalMenu';
import { HiMenuAlt4 } from 'react-icons/hi';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [actualY, setActuallY] = useState(true);
    const [current, setCurrent] = useState(0);

    const handleShowMenu = () => {
        setShowMenu(true);
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    const scrolly = useScrollPosition();

    useEffect(() => {
        if (scrolly > 200) {
            setActuallY(false);
        } else {
            setActuallY(true);
        }
    }, [scrolly]);

    return (
        <>
            <nav
                className={`px-8 py-4 fixed top-4 w-full text-blue-500 z-[50] font-semibold flex justify-between ${
                    !actualY && '-top-40'
                }  ease-in-out`}
            >
                <div className="flex gap-4 items-center">
                    <div className="burger" onClick={handleShowMenu}>
                        <HiMenuAlt4 className=" bg-off-1 py-1 px-2 rounded-lg w-8 h-8 fill-navy-500 duration-200 hover:scale-110 cursor-pointer" />
                    </div>
                    <div className="flex gap-4 bg-off-1 py-2 px-3 rounded-lg">
                        <Link to="/favorites">
                            <FiHeart className="text-navy-500 hover:text-pink-500 transition-all duration-200 hover:scale-110" />
                        </Link>
                        <Link
                            to="/cart"
                            className="text-navy-500 hover:text-blue-500 transition-all duration-200 hover:scale-110"
                        >
                            <FiShoppingCart />
                        </Link>
                    </div>
                </div>
                <Link className="hover:scale-110" to="/">
                    <img
                        src={logo}
                        alt=""
                        className="w-32 bg-navy-500 py-3 px-4 rounded-md"
                    />
                </Link>
                {showMenu && (
                    <ModalMenu setShowMenu={setShowMenu} showMenu={showMenu} />
                )}
            </nav>
        </>
    );
};

export default Navbar;
