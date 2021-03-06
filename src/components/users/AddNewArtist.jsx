import React, { useEffect, useState } from 'react';
import FormAddArtist from '../forms/FormAddArtist';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { colRefArtist, storage } from '../../firebase/config';

const bg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfVqmZAwDe1QCMoV1LeBVTiooqw637Hbb59TE0vuMBbnnUC9HJqDaXJIzsb4WEkxeh5M&usqp=CAU';

const AddNewArtistt = ({ i, setI, u, setU }) => {
    const [file, setFile] = useState(null);
    const [myProgress, setMyProgress] = useState(0);
    const [selectedImage, setSelectedImage] = useState(undefined);
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [nation, setNation] = useState({
        country: '',
        flag: '',
    });
    const [birth, setBirth] = useState({
        month: '',
        year: '',
    });
    const [artist, setArtist] = useState({
        name: '',
        nationality: '',
        dob: [],
        bio: '',
        style: '',
        tag: [],
    });

    const { name, bio, style} = artist;
    const { country, flag } = nation;

    // UPLOAD FILES
    const uploadFiles = () => {
        document.getElementById('files').click();
    };

    // GET IMAGE PREVIEW & TEMPORARY URL BASE ON FILE UPLOADED
    useEffect(() => {
        if (selectedImage) {
            setI(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);

    // FIREBASE STORAGE
    const upload = (e) => {
        let file = e.target.files[0];
        let fileRef = ref(storage, file.name);
        const uploadTask = uploadBytesResumable(fileRef, file);
        // UPLOAD ONCE THE STATE HAS CHANGED
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                // GET TASKS PROGRESS
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setFile(file);
                setMyProgress(progress);
            },
            (error) => {
                console.log(error);
                setFile(null);
            },
            () => {
                // UPLOAD COMPLETE - WE CAN GET URL NOW
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setU(downloadURL);
                });
            }
        );
        // PREV FN
        setSelectedImage(file);
    };

    // RESET FORM
    const reset = (e) => {
        e.preventDefault();
        setArtist({
            name: '',
            nationality: '',
            bio: '',
            style: '',
            url: '',
        });
        setTags([]);
        setInput('');
        setNation({
            country: '',
            flag: '',
        });
        setI(null);
        setBirth({
            month: '',
            year: '',
        });
    };

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefArtist, {
            name: name,
            nationality: country,
            flag: flag,
            dob: birth,
            bio: bio,
            style: style,
            url: u,
            tag: tags,
            createdAt: serverTimestamp(),
        }).then(() => {
            alert('Artwork Submitted!');
            reset(e);
        });
    };

    return (
        <div className="container mx-auto py-16">
            <div className="flex flex-nowrap flex-col py-24 h-full bg-off-1">
                <h1 className="text-4xl font-semibold text-center pb-8">
                    Add a new artist
                </h1>
                <form className="flex-col flex justify-between mx-auto gap-8 py-16">
                    <h1 className="text-2xl font-thin text-center pb-4 italic">
                        Profile a profile picture
                    </h1>
                    <div className="flex flex-col gap-4 items-center justify-between pb-4">
                        <img
                            src={i !== null ? i : bg}
                            alt="Upload"
                            className="w-full h-96 p-4 rounded-lg cursor-pointer object-contain hover:scale-105"
                            onClick={uploadFiles}
                        />
                        <input
                            type="file"
                            id="files"
                            name="files"
                            accept="image/png, image/jpeg"
                            className="hidden"
                            onChange={upload}
                        />
                    </div>
                    <FormAddArtist
                        handleSubmit={handleSubmit}
                        reset={reset}
                        artist={artist}
                        setArtist={setArtist}
                        tags={tags}
                        setTags={setTags}
                        input={input}
                        setInput={setInput}
                        nation={nation}
                        setNation={setNation}
                        birth={birth}
                        setBirth={setBirth}
                    />
                </form>
            </div>
        </div>
    );
};

export default AddNewArtistt;
