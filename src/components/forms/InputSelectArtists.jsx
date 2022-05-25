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
        setSelected(false);
        setText('');
        setSuggestions([]);
    };

    const onSelectionHanlder = (a) => {
        setSelectedArtist(a.name);
        setSelected(a);
    };

    console.log(selected);
    return (
        <div className="relative">
            {selected ? (
                <div className="flex flex-col gap-4 p-8justify-center items-center">
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
            {!selected && (
                <ul className="flex flex-col gap-4 absolute top-16 w-full">
                    {suggestions &&
                        suggestions.map(({ name, url, id }) => (
                            <li
                                key={id}
                                className="cursor-pointer flex items-center justify-center gap-4 bg-white p-2 rounded-full mx-auto hover:bg-off-2"
                                onClick={() => onSelectionHanlder({ name, url, id })}
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
