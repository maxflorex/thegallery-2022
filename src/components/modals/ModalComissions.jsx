import { addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { colRefCommissions } from '../../firebase/config';
import { buttontw2, buttontw3 } from '../../style/styles';

const ModalComissions = ({ setShowC, by }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setShowC(false);
        }
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
    };

    const [commision, setComission] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = commision;

    const reset = (e) => {
        e.preventDefault();
        setComission({
            name: '',
            email: '',
            message: '',
        });
    };

    // ON SUBMIT EVENT
    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(colRefCommissions, {
            name: name,
            email: email,
            message: `${
                message === ''
                    ? `I'd like to get a comission by ${by.name}`
                    : message
            }`,
            createdAt: serverTimestamp(),
        }).then(() => {
            reset(e);
        });
        setShowC(false);
        document.body.style.overflow = 'auto';
        document.body.style.height = '100%';
        alert('Commission request sent!');
    };

    const myInput =
        'w-full p-3 bg-blue-100 rounded-lg my-4 focus:outline-0 focus:bg-white border-[1px] border-blue-100';

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
                            setComission({ ...commision, name: e.target.value })
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
                            setComission({
                                ...commision,
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
                        value={
                            message === ''
                                ? `I'd like to get a comission by ${by.name}`
                                : message
                        }
                        onChange={(e) =>
                            setComission({
                                ...commision,
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
                            <button disabled className='py-2 px-4 bg-off-1 rounded-lg'>Complete Form</button>
                        )}
                        <button className={buttontw3} onClick={(e) => reset(e)}>
                            Clear Form
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalComissions;
