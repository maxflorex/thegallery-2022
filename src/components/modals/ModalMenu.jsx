import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import logo from '../../assets/tg-logo-navy.svg';
import ModalContact from './ModalContact';
import { useState } from 'react';

const ModalMenu = ({ setShowMenu }) => {
    const [showContact, setShowContact] = useState(false);
    const user = useSelector((state) => state.user.user);

    const handleClick2 = () => {
        setShowMenu(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
    };

    // LOGOUT FUNCTION
    const logoutApp = () => {
        auth.signOut();
        navigate('/');
        alert('Logged out 👋');
        handleClick2();
    };

    const navigate = useNavigate();

    const navigateTo = async (link) => {
        await setShowMenu(false);
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
                className="fixed bg-[#0000]/40 w-full h-[100vh] top-0 backdrop-blur-sm"
                onClick={handleClick2}
            />
            <div className="absolute w-96 min-h-[100vh] -top-4 left-0 bg-off-1/90 backdrop-blur-sm ">
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
                            onClick={handleShow}
                        >
                            Contact
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
                            onClick={() => navigateTo('/artist')}
                        >
                            Artists
                        </button>
                        <hr className="text-off-2 font-extralight" />
                        <hr className="text-off-2 font-extralight" />
                        <button
                            className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                            onClick={() => navigateTo('/about')}
                        >
                            About
                        </button>
                    </div>
                    {/* BASED ON USER */}
                    <div className="flex flex-col items-center gap-8 relative  md:text-xl text-lg mt-32 bg-cream-500/20 p-8 text-black rounded-lg">
                        {user !== null ? (
                            <div>
                                <div
                                    className="flex gap-4 items-center px-4 py-3 rounded-lg cursor-pointer bg-cream-300 mb-4"
                                    onClick={() => navigateTo('/dashboard')}
                                >
                                    <h1>Hello, {user.displayName}</h1>
                                    {user.photoUrl && (
                                        <img
                                            src={user.photoUrl}
                                            alt="Profile"
                                            className="w-12 h-12 rounded-full object-cover bg-blue-500"
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col gap-4 p-2">
                                    <button
                                        className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                                        onClick={() => navigateTo('/dashboard')}
                                    >
                                        Dashboard
                                    </button>
                                    <button
                                        onClick={logoutApp}
                                        className="hover:bg-white hover:shadow-sm p-2 rounded-lg"
                                    >
                                        Logout
                                    </button>
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
            {showContact && <ModalContact setShow={setShowContact} />}
        </>
    );
};

export default ModalMenu;
