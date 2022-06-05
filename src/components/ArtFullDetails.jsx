import { getDocs, where, collection, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { db } from '../firebase/config';
import {
    useFirestoreByArtist,
    UseFirestoreMoreArt,
} from '../hooks/useFirestore';

const ArtFullDetails = ({ art }) => {
    const [state, setState] = useState([]);

    const { by, title, medium, height, wide, price, url } = art;

    // START
    async function getMore() {
        let a = [];
        let by = art.by;
        const q = query(collection(db, 'art'), where('by', '==', by || ''));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            a.push(doc.data());
        });
        if(a > 0) {
            setState(a)
        }
    }


    console.log(state);

    return (
        <>
            {title && (
                <div>
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="w-full md:w-[50vw] py-16 md:py-40 flex items-center justify-evenly bg-off-2">
                            <img
                                src={url}
                                alt="Artwork"
                                className=" max-w-full p-16 object-contain rounded-xl max-h-[60vh]"
                            />
                        </div>
                        <div className="md:w-1/2 w-full h-full flex flex-col items-start md:justify-center justify-start p-16 gap-4 my-auto	">
                            <div className="flex items-center justify-center gap-4 my-auto">
                                <h1 className="italic text-sm capitalize">
                                    by : {by.name.toLowerCase()}
                                </h1>
                                <img
                                    src={by.url}
                                    alt="artist"
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                            </div>
                            <h1 className="text-4xl font-thin capitalize">
                                {title.toLowerCase()}
                            </h1>
                            <p>
                                <span className="text-xs italic">Medium:</span>{' '}
                                {medium}
                            </p>
                            {/* TABLE STARTS */}
                            <table className="table-auto border-[1px] border-off-1 my-8">
                                <thead>
                                    <tr className="text-left bg-off-1">
                                        <th className=" font-normal text-xs p-2 italic">
                                            Width
                                        </th>
                                        <th className=" font-normal text-xs p-2 italic">
                                            Height
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2">{wide}</td>
                                        <td className="p-2">{height}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* TABLE ENDS */}
                            <button className="py-2 px-4 bg-off-1 rounded-md hover:bg-blue-200">
                                Acquire this artwork
                            </button>
                            <button className="py-2 px-4 hover:bg-blue-200 rounded-md border-[1px] border-off-2 mt-4">
                                Make an offer
                            </button>
                            <div className="flex gap-4 items-center p-2 mt-4">
                                <FiHeart className="hover:scale-125 cursor-pointer hover:fill-pink-500" />
                                <FiShoppingCart className="hover:scale-125 cursor-pointer hover:fill-pink-500" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ArtFullDetails;
