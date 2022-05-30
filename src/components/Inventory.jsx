import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';

const Inventory = () => {
    const { artist, art } = useContext(AppContext);

    return <div className='mx-auto flex flex-col justify-center items-center py-40'>
      <h1 className='text-4xl font-thin'>The Gallery showcase art of {artist.length}</h1>
      <hr className='py-8 text-navy-500 h-[1px]'/>
      <h1 className='text-4xl font-thin'>{art?.length} artworks on display</h1>
      </div>;
};

export default Inventory;
