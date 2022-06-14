import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { db } from '../firebase/config';

const useRemoveCart = () => {
    const { userName } = useContext(AppContext);
    const cartDocRef = doc(db, 'cart', `${userName}`);

    // REMOVE FROM CART
    const HandleRemoveCart = async (art) => {
        await updateDoc(cartDocRef, {
            cart: arrayRemove(art),
        });
    };

    return [HandleRemoveCart];
};

export default useRemoveCart;
