import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/appContext';
import { db } from '../firebase/config';
import { useFirestoreId } from './useFirestore';
import { useSelector } from 'react-redux';

const useCart = () => {
    //
    const user = useSelector((state) => state.user.user);
    const userName = user?.displayName?.toLowerCase().replace(/ /g, '');
    const cart = useFirestoreId('cart', `${userName}`);
    const [l, setL] = useState(0);

    useEffect(() => {
        if (cart?.cart?.length > 0) {
            setL(cart?.cart?.length);
        }
    }, [cart?.length]);
    //
    const cartDocRef = doc(db, 'cart', `${userName}`);

    // CART FUNCTION
    const HandleCart = async (art) => {
        if (l > 0) {
            await updateDoc(cartDocRef, {
                cart: arrayUnion(art),
            }).then(() => {
                alert('New item added to your 🛒');
            });
        } else {
            await setDoc(cartDocRef, {
                cart: [art],
            }).then(() => {
                alert('Your 🛒 has been created');
            });
        }
    };

    return [HandleCart];
};

export default useCart;
