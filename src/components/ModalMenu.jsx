import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import logo from '../assets/tg-logo-navy.svg';

const ModalMenu = ({ setShowMenu }) => {
    const user = useSelector((state) => state.user.user);

    const handleClick2 = () => {
        setShowMenu(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
    };

    // LOGOUT FUNCTION
    const logoutApp = () => {
        auth.signOut();
    };

    const navigate = useNavigate();

    const navigateTo = async (link) => {
        await setShowMenu(false);
        navigate(`${link}`);
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
    };

    return (
        <>
            <div
                className="absolute bg-[#0000]/80 w-full h-[100vh] -top-4 backdrop-blur-sm"
                onClick={handleClick2}
            />
            <div className="absolute w-[40rem] h-[100vh] -top-4 left-0 bg-off-1/90 backdrop-blur-sm">
                <div className="flex flex-col justify-start items-center h-full pt-40 ">
                    <div className="flex flex-col gap-2 text-[#000000]/70 md:text-2xl text-lg text-center">
                        <button
                            onClick={() => navigateTo('/')}
                            className="hover:bg-white hover:shadow-sm p-4 rounded-lg"
                        >
                            Home
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-4 rounded-lg"
                            onClick={() => navigateTo('/contact')}
                        >
                            Contact
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-4 rounded-lg"
                            onClick={() => navigateTo('/art')}
                        >
                            Artworks
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-4 rounded-lg"
                            onClick={() => navigateTo('/artists')}
                        >
                            Artists
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-4 rounded-lg"
                            onClick={() => navigateTo('/artists')}
                        >
                            Exhibitions
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-4 rounded-lg"
                            onClick={() => navigateTo('/exhibitions')}
                        >
                            About
                        </button>
                    </div>
                    {/* BASED ON USER */}
                    <div className="flex flex-col items-center gap-4 relative  md:text-2xl text-xl mt-32 bg-cream-500/20 p-8 text-[#000000]/70 rounded-lg">
                        {user !== null ? (
                            <div>
                                <div
                                    className="flex gap-4 items-center px-4 py-3 rounded-lg hover:bg-cream-500 cursor-pointer bg-off-1 mb-4"
                                    onClick={() => navigateTo('/dashboard')}
                                >
                                    <h1>Hello, {user.displayName}</h1>
                                    <img
                                        src={user.photoUrl}
                                        alt="Profile"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-4 ">
                                    <button
                                        onClick={() => navigateTo('/dashboard')}
                                    >
                                        Dashboard
                                    </button>
                                    <button onClick={logoutApp}>Logout</button>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => navigateTo('/login')}
                                className="text-[#000000]/70 md:text-2xl text-xl text-center"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>

                {/* CLOSE BUTTON */}
                <span
                    className="fixed top-8 right-8 px-4 py-4 bg-[#0000]/90 rounded-full hover:bg-pink-500 cursor-pointer dismiss duration-700 transition-all dismiss"
                    onClick={handleClick2}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        className="dismiss fill-off-3 hover:fill-navy-500"
                        onClick={handleClick2}
                    >
                        <path
                            d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
                            className="dismiss"
                            onClick={handleClick2}
                        />
                    </svg>
                </span>
                <img
                    src={logo}
                    alt="Logo"
                    className="fixed bottom-0 w-40 p-8"
                />
            </div>
        </>
    );
};

export default ModalMenu;
