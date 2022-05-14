import React from 'react';
import { inputtw } from '../../style/styles';

const Login = () => {
    return (
        <div className="w-full h-[75vh]">
            <div className="flex flex-col h-full justify-center items-center">
                <h1 className="text-4xl">Login</h1>
                <form className="grid grid-cols-1 gap-4 py-8">
                    <input
                        className={inputtw}
                        type="email"
                        placeholder="Enter your Email"
                    />
                    <input
                        className={inputtw}
                        type="password"
                        placeholder="Enter your Password"
                    />
                    <button className='bg-cream-500 mr-auto p-4 rounded-lg hover:scale-110 active:scale-100 text-white font-semibold hover:bg-cream-400'>Login</button>
                    <p>Don't have an account? <a className='cursor-pointer'>Signup</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
