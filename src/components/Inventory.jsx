import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

const Inventory = () => {
    const { artist, art, collection } = useContext(AppContext);

    return (
        <div className="mx-auto flex flex-col justify-center items-center py-40">
            <h1 className="text-3xl font-thin">
                The Gallery showcase art of {artist.length} artists
            </h1>
            <hr className="py-8 text-navy-500 h-[1px]" />
            <h1 className="text-3xl font-thin">
                {art?.length} artworks on display & {collection?.length}{' '}
                collections
            </h1>
        </div>
    );
};

export default Inventory;
