import { arrayUnion, setDoc, updateDoc } from "firebase/firestore";

// FAVORITE FUNCTION
const handleFavorite = async (art, id) => {
    if (userExists) {
        await updateDoc(favDocRef, {
            favorites: arrayUnion(art),
            artwork_id: arrayUnion(id),
        }).then(() => {
            alert('Updated! ❤️');
        });
    } else {
        await setDoc(favDocRef, {
            favorites: art,
            artwork_id: id,
        }).then(() => {
            alert('New 💟');
        });
    }
};
