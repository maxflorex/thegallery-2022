import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { colRefArt, colRefArtist, db } from '../firebase/config';

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

export const UseFirestoreMoreArt = (by) => {
    const [state, setState] = useState([]);
    const q = query(colRefArt, where('by', '==', by || ''));

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        let a = [];
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                a.push({ ...doc.data(), id: doc.id });
            });
            setState(a);
        });
    }, [by]);

    return state;
};

export const UseFirestoreArtist = (name) => {
    const [state, setState] = useState([]);
    const q = query(colRefArtist, where('name', '==', name || ''));

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        let a = [];
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                a.push({ ...doc.data(), id: doc.id });
            });
            setState(a);
        });
    }, [name]);

    return state;
};

export const UseFirestoreArtByArtist = (name, name2) => {
    const [state, setState] = useState([]);
    const q = query(colRefArt, where('by.name', 'in', [name, name2]));

    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        let a = [];
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                a.push({ ...doc.data(), id: doc.id });
            });
            setState(a);
        });
    }, [name, name2]);

    return state;
};

export const useFirestoreId = (collection, id) => {
    const [state, setState] = useState([]);
    const docRef = doc(db, collection, id);
    // GET REAL TIME DATA - READ ELEMENTS
    useEffect(() => {
        onSnapshot(docRef, (doc) => {
            setState(doc.data(), doc.id);
        });
    }, [id]);

    return state;
};

export default UseFirestore;
