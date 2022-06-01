import React, { useEffect, useState } from 'react';
import { inputtw3 } from '../../style/styles';

const data = [
    'Mixed Media',
    'Acrylic',
    'Giclée',
    'Sculpture',
    'Resin',
    'Oil',
    'Pigments',
];

const InputMedium = ({ show, setShow, setArt, art }) => {
    const [selected, setSelected] = useState('');

    const handleClick = (data) => {
        setSelected(data);
        setShow(!show);
        setArt({ ...art, medium: selected });
    };

    useEffect(() => {
        setArt({ ...art, medium: selected });
    }, [selected]);

    const handleOpen = () => {
        if (show !== 'medium') {
            setShow('medium');
        } else if (show === 'medium') {
            setShow('');
        }
    };

    return (
        <div className="relative">
            <input
                className={inputtw3}
                onClick={handleOpen}
                value={selected ? selected : 'Select Medium'}
                readOnly
            />
            {show === 'medium' && (
                <div className="absolute mt-4 bg-cream-100 p-4 rounded-lg z-[999]">
                    {data.map((data, index) => (
                        <h3
                            key={index}
                            className="p-2 hover:bg-cream-300 rounded-xl cursor-pointer font-medium"
                            onClick={() => handleClick(data)}
                        >
                            {data}
                        </h3>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InputMedium;
