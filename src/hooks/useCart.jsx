import {
    arrayUnion,
    doc,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { db } from '../firebase/config';

const useCart = () => {
    const { userName, cartExists } = useContext(AppContext);
    const cartDocRef = doc(db, 'cart', `${userName}`);

    // CART FUNCTION
    const HandleCart = async (art) => {
        if (cartExists) {
            await updateDoc(cartDocRef, {
                cart: arrayUnion(art),
            }).then(() => {
                alert('New item added to your 🛒');
            });
        } else {
            await setDoc(cartDocRef, {
                cart: art,
            }).then(() => {
                alert('Your 🛒 has been created');
            });
        }
    };

    return [HandleCart];
};

export default useCart;
