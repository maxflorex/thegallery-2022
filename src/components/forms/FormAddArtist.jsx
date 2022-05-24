import React from 'react';
import { inputtw3 } from '../../style/styles';
import uploadIcon from '../../assets/upload.svg';

const FormAddArtist = ({ artist, setArtist, handleSubmit, reset }) => {
    const { name, nationality, dob, bio, style } = artist;

    return (
        <div className="flex-col flex justify-between gap-8 py-16">
            <input
                type="text"
                className={inputtw3}
                value={name}
                onChange={(e) => setArtist({ ...artist, name: e.target.value })}
                placeholder="Artist's Name..."
            />
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="number"
                    className={inputtw3}
                    value={dob}
                    onChange={(e) =>
                        setArtist({ ...artist, dob: e.target.value })
                    }
                    placeholder="Date of birth..."
                />
                <input
                    type="number"
                    className={inputtw3}
                    value={nationality}
                    onChange={(e) =>
                        setArtist({ ...artist, nationality: e.target.value })
                    }
                    placeholder="Nationality..."
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <textarea
                    type="text"
                    className={inputtw3}
                    value={bio}
                    onChange={(e) =>
                        setArtist({ ...artist, bio: e.target.value })
                    }
                    placeholder="Enter Bio..."
                />
                <input
                    type="text"
                    className={inputtw3}
                    value={style}
                    onChange={(e) =>
                        setArtist({ ...artist, style: e.target.value })
                    }
                    placeholder="Enter Style..."
                />
            </div>
            <div className="flex flex-col gap-2 items-center justify-between pb-4">
                <label htmlFor="files" className="">
                    <img
                        src={uploadIcon}
                        alt="Upload"
                        className="w-16 p-2 rounded-lg cursor-pointer object-cover hover:scale-105 opacity-50 hover:opacity-100"
                    />
                </label>
                <input
                    type="file"
                    id="files"
                    className="hidden"
                    placeholder="Update your name..."
                />
                <h2>Upload Extra Pictures</h2>
            </div>
            <div className="flex gap-4">
                <button
                    className="w-full py-3 px-4 bg-navy-500 rounded-lg text-white active:scale-95"
                    onClick={handleSubmit}
                >
                    Add Artwork
                </button>
                <button
                    className="w-full rounded-lg hover:bg-pink-500 bg-off-3 active:scale-95"
                    onClick={reset}
                >
                    Clear Form
                </button>
            </div>
        </div>
    );
};

export default FormAddArtist;
