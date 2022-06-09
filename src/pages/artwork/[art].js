import { useParams } from 'react-router-dom';
import { useFirestoreId } from '../../hooks/useFirestore';
import ArtFullDetails from '../../components/ArtFullDetails';
import { useState } from 'react';
import { colRefFavorites } from '../../firebase/config';
import { useSelector } from 'react-redux';
import { addDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';

const Art = () => {
	const { id, love, setLove } = useParams();
	const { ...art } = useFirestoreId('art', id)

		return (
		<div className='w-full snap-mandatory snap-y'>
			<ArtFullDetails art={art} />
		</div>

	)
}



export default Art