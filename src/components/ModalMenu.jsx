import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ModalMenu = ({ handleClick }) => {
    const [showLogout, setShowLogout] = useState(false);
    const user = useSelector((state) => state.user.user);

    const handleClick2 = () => {
        handleClick();
        setShowLogout(false)
    }

    return (
        <div
            className="absolute w-[40rem] h-[100vh] -top-4 left-0 bg-off-1/90 backdrop-blur-sm dismiss"
            onClick={handleClick}
        >
            <div className="flex flex-col gap-4 justify-start items-center h-full pt-80">
                <div className="flex flex-col gap-4 text-navy-500 md:text-2xl text-xl text-center" >
                    <Link className="hover:scale-125" to="/">
                        Home
                    </Link>
                    <hr />
                    <Link className="hover:scale-125" to="/contact">
                        Contact
                    </Link>
                    <hr />
                    <Link className="hover:scale-125" to="/artworks">
                        Artworks
                    </Link>
                    <hr />
                    <Link className="hover:scale-125" to="/about">
                        About
                    </Link>
                </div> 
                {user !== null ? (
                    <div className="flex flex-col items-center gap-4 relative text-navy-500 md:text-2xl text-xl py-8" >
                        <Link to="/dashboard">Dashboard</Link>
                        <div
                            className="flex gap-4 items-center px-4 py-3 rounded-lg hover:bg-cream-500 cursor-pointer bg-off-1"
                            onClick={() => setShowLogout(!showLogout)}
                        >
                            <h1>Hello, {user.displayName}</h1>
                            <img
                                src={user.photoUrl}
                                alt="Profile"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                        {showLogout && (
                            <>
                                <button className="absolute -bottom-16 right-0 p-2 bg-navy-500 rounded-lg hover:bg-pink-500 text-off-1">
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
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
        </div>
    );
};

export default ModalMenu;
