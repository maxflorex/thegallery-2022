import { addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { colRefInqueries } from '../../firebase/config';
import { buttontw, buttontw2, buttontw3, inputtw } from '../../style/styles';

const ArtInquery = ({ setShowForm, art }) => {
    const [inquery, setInquery] = useState({
        name: '',
        email: '',
        message: '',
        notes: '',
    });

    const { by, title, price } = art;
    const { name, email, message, notes } = inquery;

    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setShowForm(false);
        }
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
    };

    const myInput =
        'w-full p-3 bg-blue-100 rounded-lg my-4 focus:outline-0 focus:bg-white border-[1px] border-blue-100';

    const reset = (e) => {
        e.preventDefault();
        setInquery({
            name: '',
            email: '',
            message: '',
            notes: '',
        });
    };

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(colRefInqueries, {
            name: name,
            email: email,
            message: `${
                message === ''
                    ? `I'd like to get this artwork by ${by.name}`
                    : message
            }`,
            notes: notes,
            artwork_title: title,
            price: price,
            createdAt: serverTimestamp(),
        }).then(() => {
            reset(e);
        });
        setShowForm(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
    };

    console.log(art);

    return (
        <div
            className="closeM fixed w-full h-full overflow-hidden bg-white/40 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] bg-white p-16 rounded-lg drop-shadow-md max-h-[90vh] overflow-y-auto scroll">
                <h1 className="text-2xl text-center mb-8">Artwork Inquery</h1>
                <form className="grid">
                    {/* NAME */}
                    <label>Name</label>
                    <input
                        type="text"
                        required
                        placeholder="Enter your name..."
                        className={myInput}
                        value={name}
                        onChange={(e) =>
                            setInquery({ ...inquery, name: e.target.value })
                        }
                    />
                    {/* NAME */}
                    <label>Email</label>
                    <input
                        type="email"
                        required
                        placeholder="Enter your email..."
                        className={myInput}
                        value={email}
                        onChange={(e) =>
                            setInquery({ ...inquery, email: e.target.value })
                        }
                    />
                    {/* MESSAGE */}
                    <label>Message</label>
                    <textarea
                        type="email"
                        required
                        placeholder="Enter your email..."
                        className={myInput}
                        value={
                            message === ''
                                ? `I'd like to get this artwork by ${by.name}`
                                : message
                        }
                        onChange={(e) =>
                            setInquery({ ...inquery, message: e.target.value })
                        }
                    />
                    {/* NOTES */}
                    <label>
                        Notes <span className="italic">(Optional)</span>
                    </label>
                    <textarea
                        type="email"
                        placeholder="Enter your notes..."
                        className={myInput}
                        value={notes}
                        onChange={(e) =>
                            setInquery({ ...inquery, notes: e.target.value })
                        }
                    />
                    <div className="flex flex-wrap mt-4">
                        <button className={buttontw2} onClick={handleSubmit}>
                            Send Inquery
                        </button>
                        <button className={buttontw3} onClick={(e) => reset(e)}>
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ArtInquery;
