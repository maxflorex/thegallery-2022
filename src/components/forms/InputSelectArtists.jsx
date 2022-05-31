import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { buttontw3, inputtw3 } from '../../style/styles';
import closeX from '../../assets/x.svg';

const InputSelectArtists = ({ setSelectedArtist, setArt, art, setCreateArtist }) => {
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
        setSelectedArtist(a);
        setSelected(a);
        setSuggestions([]);
        setText('');
    };

    useEffect(() => {
        if (selected !== undefined) {
            setArt({ ...art, by: selected });
        }
    }, [selected]);

    return (
        <div className="relative w-96 mx-auto">
            {selected ? (
                <div className="flex flex-col gap-4 p-8 justify-center items-center w-full">
                    <h1 className="text-lg font-semibold pl-4 capitalize">
                        {selected.name.toLowerCase()}
                    </h1>
                    <div className="flex relative">
                        <img
                            src={selected.url}
                            alt="Profile"
                            className="w-32 h-32 object-cover rounded-full relative"
                        />
                        <img
                            src={closeX}
                            alt="x"
                            className="bg-white p-1 absolute top-0 text-white rounded-full cursor-pointer fill-white"
                            onClick={onClickHandler}
                        />
                    </div>
                </div>
            ) : (
                <>
                    <input
                        type="text"
                        value={!selected ? text : selected.name}
                        className={inputtw3}
                        onChange={(e) => onChangeHandler(e.target.value)}
                        placeholder="Enter Artist"
                        onClick={onClickHandler}
                    />
                    {text === '' && (
                        <div className="flex flex-col gap-8 py-8 justify-center items-center">
                            <p className="italic">- New artist? -</p>
                            <span className={buttontw3} onClick={() => setCreateArtist(true)}> Create Artist</span>
                        </div>
                    )}
                </>
            )}
            {suggestions[0] === undefined && text !== '' && (
                <>
                    <div className="flex items-center justify-center p-4 gap-4">
                        <h1>Try a new name</h1>
                        <span
                            className="py-1 px-3 rounded-full bg-navy-100 cursor-pointer"
                            onClick={onClickHandler}
                        >
                            Clear
                        </span>
                    </div>
                    <div className="flex flex-col gap-8 py-4 justify-center items-center">
                        <p className="italic">- or -</p>
                        <span className={buttontw3} onClick={() => setCreateArtist(true)}> Create Artist</span>
                    </div>
                </>
            )}
            {suggestions[0] !== undefined && (
                <ul className="flex flex-col gap-4 absolute top-16 w-full z-40 max-h-80 overflow-y-auto py-4 bg-blue-100/90 rounded-xl px-2 mx-auto">
                    {suggestions &&
                        suggestions.map(({ name, url, id }) => (
                            <li
                                key={id}
                                className="cursor-pointer flex items-center justify-center gap-4 bg-white p-2 rounded-full mx-auto hover:bg-off-2 flex-wrap"
                                onClick={() =>
                                    onSelectionHanlder({ name, url, id })
                                }
                            >
                                <h1 className="text-lg font-semibold pl-4 capitalize">
                                    {name.toLowerCase()}
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
