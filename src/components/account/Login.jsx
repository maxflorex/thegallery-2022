import React from 'react';
import { buttontw, inputtw } from '../../style/styles';

const Login = ({ setEmail, setPassword, setShowRegister, login }) => {
    return (
        <div className="w-full h-[75vh]">
            <div className="flex flex-col h-full justify-center items-center">
                <form
                    className="grid grid-cols-1 gap-4 bg-off-1 px-24 py-32 rounded-xl"
                    onSubmit={() => login()}
                >
                    <h1 className="text-6xl text-center pb-8">Login</h1>
                    <label>Email</label>
                    <input
                        className={inputtw}
                        type="email"
                        placeholder="Enter your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        className={inputtw}
                        type="password"
                        placeholder="Enter your Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="flex justify-between items-center">
                        <button className={buttontw}>Login</button>
                        <p>
                            Don't have an account?{' '}
                            <a
                                className="cursor-pointer hover:text-blue-500 hover:scale-110 border-b-[1px] py-1 border-none hover:border-solid"
                                onClick={() => setShowRegister(true)}
                            >
                                Signup
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
