import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { colRefArtist } from '../../firebase/config';

const ModalDeleteArtist = ({ id, setShowDelete }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('closeM')) {
            setShowDelete(false);
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    // DELETE DOCUMENTS
    const deleteArtwork = async (id) => {
        await deleteDoc(doc(colRefArtist, id));
        alert('Artist has been deleted!')
    };

    return (
        <div
            className="closeM fixed w-full h-full overflow-hidden bg-black/80 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[40rem]">
                <h1 className="pb-4 text-3xl font-thin text-white">
                    Are you sure you want to delete this?
                </h1>
                <div className="flex gap-4 justify-center items-center">
                    <button
                        className="px-4 py-2 bg-pink-300 rounded-full font-semibold hover:bg-pink-500 cursor-pointer duration-700 transition-all"
                        onClick={() => deleteArtwork(id)}
                    >
                        Yes, delete
                    </button>
                    <button
                        className="closeM px-4 py-2 bg-blue-300 rounded-full font-semibold hover:bg-blue-500 cursor-pointer duration-700 transition-all"
                        onClick={handleClick}
                    >
                        No, cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalDeleteArtist;
