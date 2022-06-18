import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tg-logo-white.svg';
import ritzlogo from '../assets/cdnlogo.com_the-ritz-carlton.svg';
import { useState } from 'react';
import ModalContact from './modals/ModalContact';

const Footer = () => {
    const [showContact, setShowContact] = useState(false);

    const hideScroll = () => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    const handleShow = () => {
        setShowContact(true);
        hideScroll();
    };

    return (
        <footer className="w-full bg-[#000000]/80 p-8 sticky top-full overflow-hidden">
            <section className="flex justify-between min-h-96 items-center text-off-1 container mx-auto py-16 relative">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-24 z-50" />
                </Link>
                <div className="xl:gap-32 lg:flex gap-16 flex-wrap p-4 hidden">
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
                        <Link to="/dashboard">My Profile</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
                <img src={ritzlogo} alt="Logo" className="h-32" />
            </section>
            {showContact && <ModalContact setShow={setShowContact} />}
        </footer>
    );
};

export default Footer;
