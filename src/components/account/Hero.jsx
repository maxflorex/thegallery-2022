import React from 'react';
import rough from '../../assets/rough-line.svg';
import rough2 from '../../assets/rough-line-01.svg';
import { useSelector } from 'react-redux';
import { buttontw3 } from '../../style/styles';
import { auth } from '../../firebase/config';
import { Link } from 'react-router-dom';

const Hero = () => {
    const user = useSelector((state) => state.user.user);

    // LOGOUT FUNCTION
    const logoutApp = () => {
        auth.signOut();
    };

    return (
        <div className="h-96 bg-center bg-cover w-full relative">
            <div className=" w-full h-full flex-wrap relative overflow-hidden">
                {user != null ? (
                    <div className="h-full w-full bg-navy-500/90 backdrop-blur-sm flex flex-col md:gap-4 gap-2 justify-center items-center">
                        <div className="flex items-center gap-2">
                            <h1 className="text-xl md:text-2xl font-semibold text-cream-100 drop-shadow-sm">
                                Welcome, {user?.displayName}
                            </h1>
                            <img
                                src={user.photoUrl}
                                alt="Photo"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                        <button
                            className="p-2 bg-white/10 rounded-lg hover:scale-105 text-white"
                            onClick={logoutApp}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="h-full w-full bg-navy-500/90 backdrop-blur-sm flex flex-col md:gap-4 gap-2 justify-center items-center">
                        <h1 className="text-xl md:text-2xl font-semibold text-cream-100 drop-shadow-sm">
                            Please login
                        </h1>
                        <p className="text-off-1">
                            Need an account? Please submit request at
                            thegallery@artcayman.ky
                        </p>
                        <Link className={buttontw3} to="/login">
                            Login
                        </Link>
                    </div>
                )}
                {/* DIVIDERS */}
                <img
                    src={rough}
                    alt="line"
                    className="absolute bottom-0 w-full hidden md:block"
                />
                <img
                    src={rough2}
                    alt="line"
                    className="absolute bottom-0 w-full md:hidden block"
                />
            </div>
        </div>
    );
};

export default Hero;
