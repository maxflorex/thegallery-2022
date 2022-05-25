import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { country_list } from '../../gpl/Query';
import { inputtw3 } from '../../style/styles';

const CountrySearch = ({ nation, setNation }) => {
    const { loading, error, data } = useQuery(country_list);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selected, setSelected] = useState(false);

    const { country, flag } = nation;

    const onChangeHandler = (text) => {
        let matches = [];
        if (text.length > 0) {
            matches = data.countries.filter((country) => {
                const regex = new RegExp(`${text}`, 'gi');
                return country.name.match(regex);
            });
        }
        setSuggestions(matches);
        setText(text);
    };

    const onClickHandler = () => {
        setNation({
            ...nation,
            country: '',
            flag: '',
        });
        setText('');
        setSelected(true);
    };

    const onSelect = (country) => {
        setNation({
            ...nation,
            country: country.name,
            flag: country.code,
        });
        setSelected(false);
    };

    useEffect(() => {
        !country && text !== '' && setText('')
    }, [nation]);

    return (
        <div className="relative z-20">
            <input
                type="text"
                className={inputtw3}
                onChange={(e) => onChangeHandler(e.target.value)}
                value={country != '' ? country : text}
                placeholder="Enter Nationality"
                onClick={onClickHandler}
            />
            {country && (
                <img
                    src={`https://flagcdn.com/${flag.toLowerCase()}.svg`}
                    alt="flag"
                    className="w-8 h-full object-contain absolute right-4 top-0"
                />
            )}
            {text && selected && (
                <div className="flex flex-col mt-4 bg-white rounded-xl p-2 max-h-96 overflow-y-auto absolute top-12 w-full">
                    {data &&
                        suggestions.map((country, index) => (
                            <div
                                className="flex justify-between flex-wrap gap-1 items-center w-full p-4 rounded-xl hover:bg-cream-500 cursor-pointer"
                                key={index}
                                onClick={() => onSelect(country)}
                            >
                                <img
                                    src={`https://flagcdn.com/${country.code.toLowerCase()}.svg`}
                                    alt="flag"
                                    className="w-8 object-contain"
                                />
                                <h1>{country.name}</h1>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default CountrySearch;
