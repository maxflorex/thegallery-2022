import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import { db } from '../firebase/config';
import { useFirestoreId } from './useFirestore';

const useFavorite = () => {
    const { userName } = useContext(AppContext);
    const fav = useFirestoreId('favorites', `${userName}`);
    const [l, setL] = useState(0);

    useEffect(() => {
        if (fav?.favorites?.length > 0) {
            setL(fav?.favorites?.length);
        }
    }, [fav?.length]);

    const favDocRef = doc(db, 'favorites', `${userName}`);

    // FAVORITE FUNCTION
    const HandleFavorite = async (art) => {
        if (userName !== undefined) {
            if (l > 0) {
                await updateDoc(favDocRef, {
                    favorites: arrayUnion(art),
                }).then(() => {
                    alert('❤️');
                });
            } else {
                await setDoc(favDocRef, {
                    favorites: [art],
                }).then(() => {
                    alert('New 💟');
                });
            }
        } else if (userName === undefined) {
            alert('Login to add to ❤️');
        }
    };

    return [HandleFavorite];
};

export default useFavorite;
