import React, { useState } from 'react';
import { inputtw } from '../../style/styles';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

export const InputSeacrhArtByArtist = ({ by, artist }) => {
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState('');

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = artist.filter((a) => {
                const regex = new RegExp(`${text}`, 'gi');
                return a.title.match(regex);
            });
        }
        setSuggestions(matches);
        setText(text);
    };

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/art/${id}`);
        setText('');
    };

    return (
        <div className="flex flex-col items-center justify-center col-span-3 lg:col-span-1 p-8 gap-4 relative lg:w-96 w-full mx-auto">
            <p className="italic text-2xl font-thin text-center">
                Search more from{' '}
                <span className="capitalize">{by.name.toLowerCase()}</span>
            </p>
            <div className="flex relative items-center justify-center w-full">
                <input
                    type="text"
                    className={inputtw}
                    placeholder="Explore more from this artist"
                    value={text}
                    onChange={(e) => onChangeHandler(e.target.value)}
                />
                {text && suggestions[0] && (
                    <ul className="flex flex-col scroll  gap-4 absolute top-16  w-full z-40 max-h-80 overflow-y-auto py-4 bg-blue-100/90 rounded-xl mx-auto">
                        {suggestions &&
                            suggestions.map(({ title, id, url }) => (
                                <li
                                    key={id}
                                    className="cursor-pointer bg-white p-2 rounded-full mx-auto hover:bg-off-2 flex-wrap"
                                    // onClick={() =>
                                    //     onSelectionHanlder({ name, url, id })
                                    // }
                                >
                                    <span
                                        className=" flex items-center justify-center gap-4"
                                        onClick={() => handleClick(id)}
                                    >
                                        <h1 className="text-sm font-semibold pl-4 capitalize text-black">
                                            {title.toLowerCase()}
                                        </h1>
                                        <img
                                            src={url}
                                            alt="Profile"
                                            className="w-10 h-10 object-cover rounded-full"
                                        />
                                    </span>
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </div>
    );
};
