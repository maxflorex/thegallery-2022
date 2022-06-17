import { addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { colRefContact } from '../../firebase/config';
import { buttontw2, buttontw3 } from '../../style/styles';

const ModalContact = ({ setShow }) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = contact;

    const reset = (e) => {
        e.preventDefault();
        setContact({
            name: '',
            email: '',
            message: '',
        });
    };

    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setShow(false);
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(colRefContact, {
            name: name,
            email: email,
            message: message,
            createdAt: serverTimestamp(),
        }).then(() => {
            reset(e);
        });
        setShow(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
        alert('Your message has been sent!');
    };

    const myInput =
        'w-full p-3 bg-blue-100 rounded-lg my-4 focus:outline-0 focus:bg-white border-[1px] border-blue-100';

    return (
        <div
            className="fixed w-full h-full overflow-hidden bg-off-2/40 z-50 dismiss top-0 left-0 no-scrollbar backdrop-blur-sm"
            onClick={handleClick}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative bg-white p-16 rounded-lg">
                    <h1 className='text-2xl font-thin text-center mb-16'>Get in touch!</h1>
                    <form className="flex flex-col gap-4 w-96 rounded-lg">
                        {/* NAME */}
                        <label>Name</label>
                        <input
                            type="text"
                            required
                            placeholder="Enter your name..."
                            className={myInput}
                            value={name}
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    name: e.target.value,
                                })
                            }
                        />
                        {/* EMAIL */}
                        <label>Email</label>
                        <input
                            type="email"
                            required
                            placeholder="Enter your email..."
                            className={myInput}
                            value={email}
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    email: e.target.value,
                                })
                            }
                        />
                        {/* MESSAGE */}
                        <label>Message</label>
                        <textarea
                            type="email"
                            required
                            placeholder="Enter your email..."
                            className={myInput}
                            value={message}
                            onChange={(e) =>
                                setContact({
                                    ...contact,
                                    message: e.target.value,
                                })
                            }
                        />
                        <div className="flex flex-wrap mt-4">
                            {name && email ? (
                                <button
                                    className={buttontw2}
                                    onClick={handleSubmit}
                                >
                                    Send Inquery
                                </button>
                            ) : (
                                <button
                                    disabled
                                    className="py-2 px-4 bg-off-1 rounded-lg"
                                >
                                    Complete Form
                                </button>
                            )}
                            <button
                                className={buttontw3}
                                onClick={(e) => reset(e)}
                            >
                                Clear Form
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalContact;
