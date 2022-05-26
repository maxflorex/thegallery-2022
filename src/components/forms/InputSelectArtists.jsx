import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { inputtw3 } from '../../style/styles';

const InputSelectArtists = ({ setSelectedArtist, selectedArtist }) => {
    const [text, setText] = useState('');
    const { artist } = useContext(AppContext);
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState(false);

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = artist.filter((a) => {
                const regex = new RegExp(`${text}`, 'gi');
                return a.name.match(regex);
            });
        }
        setSuggestions(matches);
        setText(text);
    };

    const onClickHandler = () => {
        setSelected('');
        setText('');
        setSuggestions([]);
        setSelectedArtist('');
    };

    const onSelectionHanlder = (a) => {
        setSelectedArtist(a.name);
        setSelected(a);
        setSuggestions([]);
        setText('');
    };

    return (
        <div className="relative w-96 mx-auto">
            {selected ? (
                <div className="flex flex-col gap-4 p-8 justify-center items-center w-full">
                    <h1 className="text-lg font-semibold pl-4">
                        {selected.name}
                    </h1>
                    <div className="flex relative">
                        <img
                            src={selected.url}
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full relative"
                        />
                        <span
                            className="absolute top-0 right-4 bg-pink-500 px-2 rounded-3xl cursor-pointer"
                            onClick={onClickHandler}
                        >
                            x
                        </span>
                    </div>
                </div>
            ) : (
                <input
                    type="text"
                    value={!selected ? text : selected.name}
                    className={inputtw3}
                    onChange={(e) => onChangeHandler(e.target.value)}
                    placeholder="Enter Artist"
                    onClick={onClickHandler}
                />
            )}
            {suggestions[0] === undefined && text !== '' && (
                <div className="flex items-center justify-center p-4 gap-4">
                    <h1>Try a new name</h1>
                    <span
                        className="py-1 px-3 rounded-full bg-navy-100 cursor-pointer"
                        onClick={onClickHandler}
                    >
                        Clear
                    </span>
                </div>
            )}
            {suggestions[0] !== undefined && (
                <ul className="flex flex-col gap-4 absolute top-16 w-full z-40 h-80 overflow-y-scroll py-4 bg-blue-100 rounded-xl px-2 mx-auto">
                    {suggestions &&
                        suggestions.map(({ name, url, id }) => (
                            <li
                                key={id}
                                className="cursor-pointer flex items-center justify-center gap-4 bg-white p-2 rounded-full mx-auto hover:bg-off-2 flex-wrap"
                                onClick={() =>
                                    onSelectionHanlder({ name, url, id })
                                }
                            >
                                <h1 className="text-lg font-semibold pl-4">
                                    {name}
                                </h1>
                                <img
                                    src={url}
                                    alt="Profile"
                                    className="w-16 h-16 object-cover rounded-full"
                                />
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
};

export default InputSelectArtists;
