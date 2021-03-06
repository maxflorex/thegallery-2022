import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { inputtw3 } from '../../style/styles';

const InputCollections = ({ show, setShow, art, setArt }) => {
    const [selected, setSelected] = useState('');

    const { collection } = useContext(AppContext);

    const handleClick = (data) => {
        setSelected(data);
        setShow(!show);
    };

    useEffect(() => {
        setArt({ ...art, collection: selected });
    }, [selected]);

    const handleOpen = () => {
        if (show !== 'collection') {
            setShow('collection');
        } else if (show === 'collection') {
            setShow('');
        }
    };

    return (
        <div className="relative">
            <input
                className={inputtw3}
                onClick={handleOpen}
                value={selected ? selected : 'Select Collection'}
                readOnly
            />
            {show === 'collection' && (
                <div className="absolute mt-4 bg-cream-100 p-4 rounded-lg z-[999]">
                    {collection &&
                        collection.map((data, index) => (
                            <h3
                                key={index}
                                className="p-2 hover:bg-cream-300 rounded-xl cursor-pointer font-collection"
                                onClick={() => handleClick(data.title)}
                            >
                                {data.title}
                            </h3>
                        ))}
                </div>
            )}
        </div>
    );
};

export default InputCollections;
