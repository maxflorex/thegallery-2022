import React from 'react';
import { buttontw3, inputtw2 } from '../../style/styles';
import smily from '../../assets/smily.svg';

const EditProfile = () => {
    return (
        <div className="flex flex-nowrap flex-col py-24 h-full">
            <h1 className="text-4xl font-semibold text-center pb-8">
                Edit your profile
            </h1>
            <form className=" flex-col flex justify-between mx-auto z-[500] gap-8 py-16">
                <h1 className="text-2xl font-thin text-center pb-4 italic">
                    Account Information
                </h1>

                <div className="flex flex-col gap-4 items-center justify-between pb-4">
                    <label htmlFor="upload-picture" className="">
                        <img
                            src={smily}
                            alt="Upload"
                            className="w-24 p-4 rounded-full bg-cream-200 cursor-pointer"
                        />
                    </label>
                    <input
                        type="file"
                        id="upload-picture"
                        className="hidden"
                        placeholder="Update your name..."
                    />
                    <h2>Profile Picture</h2>
                </div>
                <div className="flex gap-4 items-center flex-col">
                    <label htmlFor="Name" className="">
                        Name
                    </label>
                    <input
                        type="text"
                        className={inputtw2}
                        placeholder="Update your name..."
                    />
                </div>
                <div className="flex gap-4 items-center flex-col">
                    <label htmlFor="Name" className="">
                        Email
                    </label>
                    <input
                        type="text"
                        className={inputtw2}
                        placeholder="Enter your email..."
                    />
                </div>
            </form>

            <form className=" flex-col flex justify-between mx-auto z-[500] gap-8">
                <h1 className="text-2xl font-thin text-center py-4 italic">
                    Change Password
                </h1>
                <div className="flex gap-4 items-center flex-col">
                    <label htmlFor="Name" className="">
                        Current Password
                    </label>
                    <input
                        type="password"
                        className={inputtw2}
                        placeholder="Update your name..."
                    />
                </div>
                <div className="flex gap-4 items-center flex-col">
                    <label htmlFor="Name" className="">
                        New Password
                    </label>
                    <input
                        type="password"
                        className={inputtw2}
                        placeholder="Enter your email..."
                    />
                </div>
                <div className="flex gap-4 items-center flex-col">
                    <label htmlFor="Name" className="">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className={inputtw2}
                        placeholder="Enter your email..."
                    />
                </div>
                <div className="py-8 items-center justify-between flex">
                    <button className={buttontw3}>Update</button>
                </div>
            </form>
            <div className="flex flex-col mt-24">
                <h1 className="text-2xl font-thin text-center py-4 italic">
                    Danger Zone!⚡
                </h1>
                <button className="px-3 py-4 rounded-lg bg-pink-500 text-off-1 mx-auto mt-8">
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default EditProfile;
