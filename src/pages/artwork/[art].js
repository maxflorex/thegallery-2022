import { useParams } from 'react-router-dom';
import { useFirestoreId } from '../../hooks/useFirestore';
import ArtFullDetails from '../../components/ArtFullDetails';
import { useState } from 'react';
import { colRefFavorites } from '../../firebase/config';
import { useSelector } from 'react-redux';
import { addDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';

const Art = () => {
	const { id } = useParams();
	const { ...art } = useFirestoreId('art', id)
	const [love, setLove] = useState({
		favorite: [],
		user: ''
	})
	const user = useSelector((state) => state.user.user);

	// RESET
	const reset = (e) => {
		e.preventDefault();
		setLove({
			favorites: [],
			user: ''
		})
	}

	// ON SUBMIT EVENT
	const handleSubmit = (e) => {
		e.preventDefault();
		addDoc(colRefFavorites, {
			user: user,
			favorites: love,
			createdAt: serverTimestamp(),
		}).then(() => {
			alert('Artwork Submitted!');
			reset(e);
		});
	};

	return (
		<div className='w-full snap-mandatory snap-y'>
			<ArtFullDetails art={art} />
		</div>

	)
}



export default Art