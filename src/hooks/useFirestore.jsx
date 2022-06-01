import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

const UseFirestore = (myCollection) => {
    const [state, setState] = useState([]);
    const colRef = collection(db, myCollection);
    const q = query(colRef);

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            let a = [];
            snapshot.docs.forEach((doc) => {
                a.push({ ...doc.data(), id: doc.id });
            });
            setState(a);
        });
    }, []);

    return state;
};

export default UseFirestore;
