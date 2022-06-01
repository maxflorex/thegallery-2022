import React, { useContext } from 'react';
import { AppContext } from '../context/appContext';


const CollectionList = () => {
  const { collection } = useContext(AppContext);

  console.log(collection);
    return (
        <div>
            {collection &&
                collection.map((data, i) => <h1 key={i}>{data.title}</h1>)}
        </div>
    );
};

export default CollectionList;
