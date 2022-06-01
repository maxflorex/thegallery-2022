import { addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { colRefCollection } from '../../firebase/config';
import { inputtw3 } from '../../style/styles';

const FormAddCollections = () => {
    const [c, setC] = useState({
        title: '',
        desc: '',
    });

    const { title, desc } = c;

    const reset = (e) => {
        e.preventDefault();
        setC({
            title: '',
            desc: '',
        });
    };

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefCollection, {
            title: title,
            description: desc,
            createdAt: serverTimestamp(),
        }).then(() => {
            alert('Artwork Submitted!');
            reset(e);
        });
    };
    return (
        <form className="w-96 mx-auto flex flex-col gap-4 py-16">
            <h1 className="text-2xl text-center font-semibold">Add Collection</h1>
            <label>Collection</label>
            <input
                type="text"
                className={inputtw3}
                value={title}
                onChange={(e) => setC({ ...c, title: e.target.value })}
            />
            <label>
                Description <span className="italic text-xs">(Optional)</span>
            </label>
            <textarea
                rows={4}
                type="text"
                className={inputtw3}
                value={desc}
                onChange={(e) => setC({ ...c, desc: e.target.value })}
            />
            <div className="flex gap-4 mt-8">
                {!title ? (
                    <button className="w-full py-3 px-4 bg-off-5 rounded-lg text-white active:scale-95">
                        Fill out the form
                    </button>
                ) : (
                    <button
                        className="w-full py-3 px-4 bg-navy-500 rounded-lg text-white active:scale-95"
                        onClick={handleSubmit}
                    >
                        Add Collection
                    </button>
                )}
                <button
                    className="w-full rounded-lg hover:bg-pink-500 bg-off-3 active:scale-95"
                    onClick={(e) => reset(e)}
                >
                    Clear Form
                </button>
            </div>
        </form>
    );
};

export default FormAddCollections;
