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
			<div className="bg-cream-200 h-24 overflow-hidden">
				<div className="flex justify-center items-center h-full w-full">
					<h1 className='text-2xl font-light'>More Artworks by Artist</h1>
				</div>
			</div>
		</div>

	)
}



export default Art