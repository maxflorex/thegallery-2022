import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { db } from '../firebase/config';

const useRemoveFavorite = () => {
    const { userName } = useContext(AppContext);
    const favDocRef = doc(db, 'favorites', `${userName}`);

    // REMOVE FROM CART
    const handleRemoveFavorite = async (art) => {
        await updateDoc(favDocRef, {
            favorites: arrayRemove(art),
        });
    };

    return [handleRemoveFavorite];
};

export default useRemoveFavorite