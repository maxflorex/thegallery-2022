import React, { useState } from 'react';
import { buttontw, inputtw } from '../../style/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import Register from './Register';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = ({ show, setShow }) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    //   LOGIN FUNCTION
    const login = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            try {
                if (user?.email === 'prints@artcaymanco.com') {
                    navigate('/dashboard');
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.log(error.message);
                alert('Wrong Credentials!');
            }
        } catch (error) {
            console.log(error.message);
            alert('Wrong Credentials!');
        }
    };

    // LOGOUT FUNCTION
    const logoutApp = () => {
        auth.signOut();
        navigate('/');
    };

    return (
        <div className="w-full h-[75vh]">
            <div className="flex flex-col h-full justify-center items-center">
                <form className="grid grid-cols-1 gap-4 bg-blue-500 px-24 py-32 rounded-xl">
                    {user !== null && <h1>Hello, {user.email}</h1>}
                    <h1 className="text-6xl text-center pb-8">Login</h1>
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
                        <button className={buttontw} onClick={login}>
                            Login
                        </button>
                        {user !== null && (
                            <button className={buttontw} onClick={logoutApp}>
                                Logout
                            </button>
                        )}
                        <p>
                            Don't have an account?{' '}
                            <span
                                className="cursor-pointer hover:text-blue-500 hover:scale-110 border-b-[1px] py-1 border-none hover:border-solid"
                                onClick={() => setShow(!show)}
                            >
                                Signup
                            </span>
                        </p>
                    </div>
                </form>
            </div>
            {user != null && <Register show={show} />}
        </div>
    );
};

export default Login;
