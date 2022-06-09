import React, { useEffect, useState } from 'react';
import { inputtw3 } from '../../style/styles';

const InputTags = ({
    setArtist,
    artist,
    tags,
    setTags,
    input,
    setInput,
    data,
}) => {
    const [isKeyReleased, setIsKeyReleased] = useState(false);

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    };

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if (
            key === ',' &&
            trimmedInput.length &&
            !tags.includes(trimmedInput)
        ) {
            e.preventDefault();
            setTags((prevState) => [...prevState, trimmedInput]);
            setInput('');
        }

        if (
            key === 'Backspace' &&
            !input.length &&
            tags.length &&
            isKeyReleased
        ) {
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
            e.preventDefault();
            setTags(tagsCopy);
            setInput(poppedTag);
        }

        setIsKeyReleased(false);
    };

    const onKeyUp = () => {
        setIsKeyReleased(true);
    };

    const deleteTag = (index) => {
        setTags((prevState) => prevState.filter((tag, i) => i !== index));
    };

    useEffect(() => {
        setArtist({ ...artist, tag: tags });
    }, [tags]);

    return (
        <div className="w-full">
            <input
                value={input}
                placeholder="Enter Tags (Press coma for a new entry)..."
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onChange={onChange}
                className={inputtw3}
            />
            <div className="flex gap-4 max-w-96 mt-4 flex-wrap">
                {tags?.map((tag, index) => (
                    <div
                        key={index}
                        className="flex gap-2 bg-blue-100 py-2 px-3 rounded-2xl items-center"
                    >
                        <h1 className="italic">{tag}</h1>
                        <span
                            onClick={() => deleteTag(index)}
                            className="py-1 px-3 font-bold rounded-full bg-cream-100  hover:bg-pink-200 cursor-pointer text-navy-500"
                        >
                            x
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InputTags;
