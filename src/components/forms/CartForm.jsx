import { addDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { colRefInqueries, db } from '../../firebase/config';
import { inputtw3 } from '../../style/styles';
import { AppContext } from '../../context/appContext';
import { useNavigate } from 'react-router-dom';

const CartForm = ({ art, total }) => {
    const { userName } = useContext(AppContext);
    const user = useSelector((state) => state.user.user);
    const [form, setForm] = useState({
        address: '',
        phone: '',
        notes: '',
    });

    const navigate = useNavigate()
    const { address, phone, notes } = form;

    // ON SUBMIT EVENT
    const handleSubmit = () => {
        addDoc(colRefInqueries, {
            name: user?.displayName,
            address: address,
            phone: phone,
            total: total,
            notes: notes,
            artworks: art.cart,
            createdAt: serverTimestamp(),
        }).then(() => {
            alert('Artwork Submitted!');
        });
    };

    // DELETE DOCUMENTS
    const deleteCart = async () => {
        await deleteDoc(doc(db, 'cart', `${userName}`));
    };

    const handleClick = (e) => {
        e.preventDefault();

        try {
            handleSubmit();
            try {
                deleteCart();
                try {
                    navigate('/success')
                    console.log('Great! Your inquery has been submitted');
                } catch {
                    console.log('Oops');
                }
            } catch {
                console.log('Oops');
            }
        } catch {
            console.log('Oops');
        }
    };

    return (
        <form className="p-4 mt-8 rounded-lg flex flex-col justify-center">
            <label className="text-xs text-left my-4">Name</label>
            <input
                type="text"
                className={inputtw3}
                value={user?.displayName}
                readOnly
            />
            <label className="text-xs text-left my-4">Phone Number</label>
            <input
                type="text"
                className={inputtw3}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <label className="text-xs text-left my-4">Shipping Address</label>
            <textarea
                type="text"
                className={inputtw3}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
            <label className="text-xs text-left my-4">Notes</label>
            <textarea
                type="text"
                className={inputtw3}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
            <button
                className="text-xs font-semibold m-auto py-2 px-4 rounded-xl bg-cream-500 my-8 hover:scale-105"
                onClick={handleClick}
            >
                Send Inquery
            </button>
        </form>
    );
};

export default CartForm;
