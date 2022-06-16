import React, { useContext, useState } from 'react';
import bg from '../assets/bg-01.svg';
import { buttontw, inputtw } from '../style/styles';
import rough from '../assets/rough-line.svg';
import rough2 from '../assets/rough-line-01.svg';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';

const Hero = () => {
    const { art } = useContext(AppContext);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState('');

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = art.filter((a) => {
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
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="h-[50vh] bg-center bg-cover w-full"
        >
            <div className="flex flex-col md:gap-4 gap-2 justify-center w-full items-center h-full flex-wrap relative">
                <h1 className="text-8xl font-thin text-cream-100 drop-shadow-sm">
                    The Gallery
                </h1>
                <p className="text-white text-xl italic font-light">
                    At The Ritz-Carlton, Cayman Islands
                </p>
                <div className="flex gap-4 w-96 relative">
                    <input
                        type="text"
                        className={inputtw}
                        placeholder="Search artwork..."
                        value={text}
                        onChange={(e) => onChangeHandler(e.target.value)}
                    />
                    {/* MODAL */}
                    {text && suggestions[0] && (
                        <ul className="flex flex-col scroll  gap-4 absolute top-12 w-full z-40 max-h-80 overflow-y-auto py-4 bg-blue-100/90 rounded-xl mx-auto">
                            {suggestions &&
                                suggestions.map(({ title, id, url }) => (
                                    <li
                                        key={id}
                                        className="cursor-pointer bg-white p-2 rounded-full mx-auto hover:bg-off-2 flex-wrap"
                                        // onClick={() =>
                                        //     onSelectionHanlder({ name, url, id })
                                        // }
                                    >
                                        <a
                                            className=" flex items-center justify-center gap-4"
                                            onClick={() => handleClick(id)}
                                        >
                                            <h1 className="text-sm font-semibold pl-4 capitalize">
                                                {title.toLowerCase()}
                                            </h1>
                                            <img
                                                src={url}
                                                alt="Profile"
                                                className="w-10 h-10 object-cover rounded-full"
                                            />
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    )}
                    {/* MODAL */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
