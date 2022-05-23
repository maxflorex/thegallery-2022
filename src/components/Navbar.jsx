import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-typo-line-01.svg';
import ModalMenu from './ModalMenu';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(true);
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    return (
        <>
            <nav className="px-8 py-4 fixed top-4 w-full text-blue-500 z-[50] font-semibold flex justify-between">
                <div className="burger" onClick={handleShowMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="bg-cream-100 p-2 rounded-lg fill-navy-500 hover:scale-110 cursor-pointer"
                    >
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                    </svg>
                </div>
                <Link className="hover:scale-125" to="/">
                    <img src={logo} alt="" className="w-32" />
                </Link>
                {showMenu && (
                    <ModalMenu setShowMenu={setShowMenu} showMenu={showMenu} />
                )}
            </nav>
        </>
    );
};

export default Navbar;
