import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const UseFirestore = (q) => {
    const [artist, setArtist] = useState([]);

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            let a = [];
            snapshot.docs.forEach((doc) => {
                a.push({ ...doc.data(), id: doc.id });
            });
            setArtist(a);
        });
    }, []);

    return { artist };
};

export default UseFirestore