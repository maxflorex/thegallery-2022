import React from 'react';
import rough from '../../assets/rough-line.svg';
import rough2 from '../../assets/rough-line-01.svg';
import { useSelector } from 'react-redux';
import { buttontw3 } from '../../style/styles';
import { auth } from '../../firebase/config';
import { Link } from 'react-router-dom';
import bgdot from '../../assets/bg-dots.svg';

// const bg =
//     'https://www.americanexpress.com/en-us/travel/discover/photos/924/3252/1200/The%20Ritz-CarltonGrand%20Cayman.jpg';

const Hero = () => {
    const user = useSelector((state) => state.user.user);

    // LOGOUT FUNCTION
    const logoutApp = () => {
        auth.signOut();
    };

    return (
        <div className="h-[40rem] bg-center bg-cover w-full relative">
            <img
                src={bgdot}
                alt="dots"
                className="w-full h-full object-cover absolute top-0 z-50"
            />
            <div className=" w-full h-full flex-wrap relative overflow-hidden">
                {user != null ? (
                    <div className="h-full w-full bg-navy-500/90 backdrop-blur-sm flex flex-col md:gap-4 gap-2 justify-center items-center">
                        <img
                            src={user.photoUrl}
                            alt="Photo"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <h1 className="text-xl md:text-2xl font-semibold text-cream-100 drop-shadow-sm">
                            Welcome, {user?.displayName}
                        </h1>
                        <button className={buttontw3} onClick={logoutApp}>
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
