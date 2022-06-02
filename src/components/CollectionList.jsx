import { deleteDoc, doc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import { colRefCollection } from '../firebase/config';

const CollectionList = () => {
    const [show, setShow] = useState('');
    const { collection } = useContext(AppContext);

    const handleClick = (i) => {
        if (show === '') {
            setShow(i);
        } else if (show === i) {
            setShow('');
        } else if (show !== '') {
            setShow(i)
        }
    };

    // DELETE DOCUMENTS
    const deleteCol = async (id) => {
        await deleteDoc(doc(colRefCollection, id));
        alert('The artwork has been deleted!');
    };

    return (
        <div className="flex flex-col justify-center items-center gap-4 py-16">
            <h1 className="text-2xl text-center font-semibold">
                Current Collections
            </h1>
            <div className="flex flex-col gap-4 pb-4">
                {collection &&
                    collection.map((data, i) => (
                        <div className="w-full" key={i}>
                            <span
                                className="text-xl relative cursor-pointer"
                                onClick={() => handleClick(i)}
                            >
                                {i + 1}. {data.title}
                                {show === i && (
                                    <div className="absolute top-0 -left-24">
                                        <span
                                            className="p-2 rounded-xl bg-off-3 hover:scale cursor-pointer hover:bg-pink-500"
                                            onClick={() => deleteCol(data.id)}
                                        >
                                            Delete
                                        </span>
                                    </div>
                                )}
                            </span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CollectionList;
