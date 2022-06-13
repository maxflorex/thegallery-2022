import { useParams } from 'react-router-dom';
import { useFirestoreId } from '../../hooks/useFirestore';
import ArtFullDetails from '../../components/ArtFullDetails';

const Art = () => {
	const { id } = useParams();
	const { ...art } = useFirestoreId('art', id)

	return (
		<div className='w-full snap-mandatory snap-y'>
			<ArtFullDetails art={art} id={id} />
		</div>

	)
}



export default Art