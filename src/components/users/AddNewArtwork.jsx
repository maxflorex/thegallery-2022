import React, { useEffect, useState, useRef } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { colRefArt, storage } from '../../firebase/config';
import FormAddArt from '../forms/FormAddArt';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import InputSelectArtists from '../forms/InputSelectArtists';
import ArtList from '../ArtList';
import CollectionList from '../CollectionList';
import FormAddCollections from '../forms/FormAddCollections';
const bg = 'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png';

const AddNewArtwork = ({ i, setI, setU, u, createArtist, setCreateArtist }) => {
    const [file, setFile] = useState(null);
    const [myProgress, setMyProgress] = useState(0);
    const [selectedImage, setSelectedImage] = useState(undefined);
    const [selectedArtist, setSelectedArtist] = useState('');
    const [view, setView] = useState('art');
    const [tags, setTags] = useState([]);
    const startForm = useRef(null);
    const [show, setShow] = useState('');

    const [art, setArt] = useState({
        title: '',
        width: '',
        height: '',
        medium: '',
        price: '',
        collection: '',
        available: '',
    });

    const { title, width, height, medium, price, collection, available } = art;

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
        setArt({
            title: '',
            width: '',
            height: '',
            medium: '',
            price: '',
            collection: '',
            tags: '',
            available: true,
        });
        setI(null);
        setShow(false);
        setSelectedArtist('');
        setSelectedImage(undefined);
        setU(null);
        setView(false);
        setFile(null);
    };

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(colRefArt, {
            title: title,
            height: height,
            wide: width,
            collection: collection,
            url: u,
            medium: medium,
            price: price,
            tag: tags,
            available: available,
            by: selectedArtist,
            createdAt: serverTimestamp(),
        }).then(() => {
            alert('Artwork Submitted!');
            reset(e);
        });
    };

    // FUNCTION - SCROLL TO BOTTOM
    const scrollToBottom = () => {
        startForm.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // USEEFFECT - SCROLL TO BOTTOM
    useEffect(() => {
        scrollToBottom();
    }, [view, selectedArtist, file]);

    return (
        <div className={`container mx-auto w-full ${!createArtist && 'py-16'}`}>
            <div className="flex flex-col gap-4 justify-center items-center mb-8">
                <h1 className="font-light italic">Select View Mode</h1>
                <div className="flex gap-8">
                    <button
                        className="py-2 px-3 rounded-xl bg-off-1 text-md font-semibold"
                        onClick={() => setView('art')}
                    >
                        Artworks
                    </button>
                    <button
                        className="py-2 px-3 rounded-xl bg-off-1 text-md font-semibold"
                        onClick={() => setView('addArt')}
                    >
                        Add Art
                    </button>
                    <button
                        className="py-2 px-3 rounded-xl bg-off-1 text-md font-semibold"
                        onClick={() => setView('collections')}
                    >
                        Collections
                    </button>
                    <button
                        className="py-2 px-3 rounded-xl bg-off-1 text-md font-semibold"
                        onClick={() => setView('addCollections')}
                    >
                        Add Collection
                    </button>
                </div>
            </div>
            {view === 'addArt' && (
                <>
                    {!createArtist && (
                        <div
                            className="flex flex-nowrap flex-col py-16 h-full"
                            ref={startForm}
                        >
                            <h1 className="text-2xl font-semibold text-center">
                                Add a new artwork
                            </h1>
                            <form className="flex-col flex justify-between mx-auto gap-8 py-8">
                                <InputSelectArtists
                                    setSelectedArtist={setSelectedArtist}
                                    setArt={setArt}
                                    art={art}
                                    setCreateArtist={setCreateArtist}
                                    createArtist={createArtist}
                                />
                                {selectedArtist
                                    ? view && (
                                          <>
                                              <h1
                                                  className="text-2xl font-thin text-center pb-4 italic"
                                                  ref={startForm}
                                              >
                                                  Upload your artwork
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
                                                  <h2>Main Picture</h2>
                                              </div>
                                              {file && (
                                                  <div ref={startForm}>
                                                      <FormAddArt
                                                          setArt={setArt}
                                                          art={art}
                                                          reset={reset}
                                                          handleSubmit={
                                                              handleSubmit
                                                          }
                                                          show={show}
                                                          setShow={setShow}
                                                          tags={tags}
                                                          setTags={setTags}
                                                          file={file}
                                                      />
                                                  </div>
                                              )}
                                          </>
                                      )
                                    : ''}
                            </form>
                        </div>
                    )}
                </>
            )}
            {view === 'art' && <ArtList />}
            {view === 'collections' && <CollectionList />}
            {view === 'addCollections' && <FormAddCollections />}
        </div>
    );
};

export default AddNewArtwork;
