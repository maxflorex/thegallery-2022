import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { db } from '../firebase/config';

const useFavorite = () => {
    const { userName, userExists } = useContext(AppContext);
    const favDocRef = doc(db, 'favorites', `${userName}`);

    // FAVORITE FUNCTION
    const HandleFavorite = async (art) => {
        if (userExists) {
            await updateDoc(favDocRef, {
                favorites: arrayUnion(art),
            }).then(() => {
                alert('❤️');
            });
        } else {
            await setDoc(favDocRef, {
                favorites: art,
            }).then(() => {
                alert('New 💟');
            });
        }
    };

    return [HandleFavorite];
};

export default useFavorite;
