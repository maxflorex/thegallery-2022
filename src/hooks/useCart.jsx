import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { AppContext } from '../context/appContext';
import { db } from '../firebase/config';

const useCart = () => {
    const { userName, cartExists } = useContext(AppContext);
    const cartDocRef = doc(db, 'cart', `${userName}`);

    // // CART FUNCTION
    const HandleCart = async (art, id) => {
        if (cartExists) {
            await updateDoc(cartDocRef, {
                cart: arrayUnion(art),
                artwork_id: arrayUnion(id),
            }).then(() => {
                alert('New item added to your 🛒');
            });
        } else {
            await setDoc(cartDocRef, {
                cart: art,
                artwork_id: id,
            }).then(() => {
                alert('Your 🛒 has been created');
            });
        }
    };

    return [HandleCart];
};

export default useCart;
