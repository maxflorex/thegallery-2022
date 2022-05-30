import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/tg-logo-white.svg';

const Footer = () => {
    return (
        <footer className="w-full bg-[#000000]/80 p-8 sticky top-full overflow-hidden">
            <div className="flex justify-between min-h-96 items-start text-off-1 container mx-auto py-16 relative">
                <Link to="/">
                    <img src={logo} alt="Logo" className="w-40 z-50" />
                </Link>
                <div className="xl:gap-32 lg:flex gap-16 flex-wrap p-4 hidden">
                    <div className="flex flex-col gap-2">
                        <Link to="/">Contact us</Link>
                        <Link to="/">Legal Notices</Link>
                        <Link to="/">General Terms and Conditions</Link>
                        <Link to="/">Costumer Testimonials</Link>
                        <Link to="/">Free Art Advisory</Link>
                        <Link to="/">My Profile</Link>
                        <Link to="/">Art for Offices</Link>
                        <Link to="/">Art for Interioir Designers</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link to="/">About us</Link>
                        <Link to="/">Our Artists</Link>
                        <Link to="/">The Team</Link>
                        <Link to="/">Our Selection Criteria</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Jobs</Link>
                        <Link to="/">Art for Offices</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/">Login</Link>
                        <Link to="/">Our Artists</Link>
                        <Link to="/">The Team</Link>
                        <Link to="/">Our Selection Criteria</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Jobs</Link>
                        <Link to="/">Art for Offices</Link>
                    </div>
                </div>
                <h1 className="text-center text-white">By Art Cayman Co.</h1>
            </div>
 
        </footer>
    );
};

export default Footer;
