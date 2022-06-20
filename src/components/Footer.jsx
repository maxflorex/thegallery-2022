import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/tg-logo-white.svg';
import ritzlogo from '../assets/cdnlogo.com_the-ritz-carlton.svg';
import { useState } from 'react';
import ModalContact from './modals/ModalContact';
import { useSelector } from 'react-redux';
import { auth } from '../firebase/config';
import { HiMenuAlt4 } from 'react-icons/hi';
import ModalMenuFooter from './modals/ModalMenuFooter';

const Footer = () => {
    const [showContact, setShowContact] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const user = useSelector((state) => state.user.user);

    const navigate = useNavigate();

    const hideScroll = () => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    const handleShow = () => {
        setShowContact(true);
        hideScroll();
    };

    // LOGOUT FUNCTION
    const logoutApp = () => {
        auth.signOut();
        navigate('/');
        alert('Logged out 👋');
    };

    const handleShowMenu = () => {
        setShowModal(true);
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    return (
        <footer className="w-full bg-[#000000]/80 p-8 sticky top-full overflow-hidden">
            <section className="flex justify-between min-h-96 items-center text-off-1 container mx-auto py-16">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-24 z-50" />
                </Link>
                <div className="xl:gap-32 md:flex gap-16 flex-wrap p-4 hidden">
                    <div className="flex flex-col gap-2">
                        <span className="cursor-pointer" onClick={handleShow}>
                            Contact Us
                        </span>
                        <Link to="/legal-notices">Legal Notices</Link>
                        <Link to="/cookies-policy">Cookies Policy</Link>
                        <Link to="/Terms-and-conditions">
                            General Terms and Conditions
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 capitalize">
                        <Link to="/about">About Us</Link>
                        <Link to="/artist">Our Artists</Link>
                        <Link to="/art">Artworks on display</Link>
                        <span className="cursor-pointer" onClick={handleShow}>
                            Free Art Advisory
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        {user?.email === 'prints@artcaymanco.com' && (
                            <Link to="/dashboard">Dashboard</Link>
                        )}
                        {user === null ? (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Create Account</Link>
                            </>
                        ) : (
                            <>
                                <h1>
                                    Welcome,{' '}
                                    <span className="uppercase">
                                        {user?.displayName}
                                    </span>
                                </h1>
                                <span
                                    className="cursor-pointer"
                                    onClick={logoutApp}
                                >
                                    Logout
                                </span>
                            </>
                        )}
                    </div>
                </div>
                <img
                    src={ritzlogo}
                    alt="Logo"
                    className="h-32 hidden md:flex"
                />
                <div className="md:hidden flex" onClick={handleShowMenu}>
                    <HiMenuAlt4 className=" bg-off-1 py-1 px-2 rounded-lg w-8 h-8 fill-navy-500 duration-200 hover:scale-110 cursor-pointer" />
                </div>
            </section>
            {showContact && <ModalContact setShow={setShowContact} />}
            {showModal && <ModalMenuFooter setShowModal={setShowModal} />}
        </footer>
    );
};

export default Footer;
