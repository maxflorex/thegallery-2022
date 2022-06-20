import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalContact from './ModalContact';
import logo from '../../assets/tg-logo-navy.svg';

const ModalMenuFooter = ({ setShowModal }) => {
    const [showContact, setShowContact] = useState(false);
    const navigate = useNavigate();

    const handleClick2 = () => {
        setShowModal(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
    };

    const navigateTo = async (link) => {
        await setShowModal(false);
        navigate(`${link}`);
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
    };

    const handleShow = () => {
        setShowContact(true);
    };

    return (
        <>
            <div
                className="fixed bg-[#0000]/40 w-full h-[100vh] top-0 backdrop-blur-sm left-0"
                onClick={handleClick2}
            />
            <div className="fixed w-96 min-h-[100vh] top-0 right-0 bg-off-1/90 backdrop-blur-sm ">
                <div className="flex flex-col justify-start items-center h-full pt-[10vh] ">
                    <div className="flex flex-col gap-2 text-black md:text-xl text-lg text-center">
                        <button
                            onClick={() => navigateTo('/')}
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                        >
                            Home
                        </button>

                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                            onClick={() => navigateTo('/about')}
                        >
                            About Us
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                            onClick={() => navigateTo('/artist')}
                        >
                            Our Artists
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                            onClick={() => navigateTo('/art')}
                        >
                            Artworks
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                            onClick={handleShow}
                        >
                            Free Art Advisory
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                            onClick={handleShow}
                        >
                            Contact
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                            onClick={() => navigateTo('/legal-notices')}
                        >
                            Legal Notices
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                            onClick={() => navigateTo('/terms-and-conditions')}
                        >
                            General Terms and Conditions
                        </button>
                    </div>
                </div>

                {/* CLOSE BUTTON */}
                <img
                    src={logo}
                    alt="Logo"
                    className="fixed bottom-0 w-40 p-8 right-0"
                />
            </div>
            {showContact && <ModalContact setShow={setShowContact} />}
        </>
    );
};

export default ModalMenuFooter;
