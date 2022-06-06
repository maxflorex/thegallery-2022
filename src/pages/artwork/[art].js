import { useParams } from 'react-router-dom';
import { useFirestoreId } from '../../hooks/useFirestore';
import ArtFullDetails from '../../components/ArtFullDetails';

const Art = () => {
	const { id } = useParams();
	const { ...art } = useFirestoreId('art', id)

	const { by, collection, title, medium, height, wide, price, toLocaleString, url } = art

	return (
		<div className='w-full'>
			<ArtFullDetails art={art} />
		</div>

	)
}



export default Art