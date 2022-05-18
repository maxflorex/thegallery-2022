import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { buttontw, inputtw } from '../../style/styles';

const Register = ({ show, setShow }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const navigate = useNavigate();

    // FN - REGISTER
    const register = async (e) => {
        e.preventDefault();
        try {
            // CREATE USER
            await createUserWithEmailAndPassword(auth, email, password);
            try {
                // UPDATE PROFILE
                await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profilePic,
                });
                try {
                    // SIGN IN
                    await signInWithEmailAndPassword(auth, email, password);
                    try {
                    } catch (error) {
                        console.log('State was not updated 😭');
                    }
                } catch (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log('Profile was not updated' + '' + error.message);
            }
        } catch (error) {
            console.log(error.message);
            alert('Wrong Credentials!');
        } finally {
            navigate('/dashboard');
        }
    };

    return (
        <div className="w-full h-[75vh]">
            <div className="flex flex-col h-full justify-center items-center">
                <form className="grid grid-cols-1 gap-4 bg-off-1 px-24 py-32 rounded-xl">
                    <h1 className="text-6xl text-center pb-8">Register</h1>
                    <label>Name</label>
                    <input
                        className={inputtw}
                        type="text"
                        placeholder="Enter your Email"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Picture</label>
                    <input
                        className={inputtw}
                        type="text"
                        placeholder="Enter an URL"
                        onChange={(e) => setProfilePic(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        className={inputtw}
                        type="email"
                        placeholder="Enter your Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        className={inputtw}
                        type="password"
                        placeholder="Enter your Password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-between items-center">
                        <button className={buttontw} onClick={register}>
                            Sign Up
                        </button>
                        <p>
                            Already registered?{' '}
                            <span
                                className="cursor-pointer hover:text-blue-500 hover:scale-110 border-b-[1px] py-1 border-none hover:border-solid"
                                onClick={() => setShow(!show)}
                            >
                                Login
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
